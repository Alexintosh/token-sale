var express     = require('express');
//var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var validator   = require('validator');
var db          = require('./models');
var datastore_lib = require('./datastore.js');
var RateLimit   = require('express-rate-limit');
var request 	= require('request');
const uuidv4    = require('uuid/v4');
const app       = express()
const https 	= require('https');
const fs 	= require('fs');

require('dotenv').config();
var tokenMap = new Map();

//TODO: Need to read up more on the bodyparser docs
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({origin: '*'})); //TODO:should change this for deployment

// rate limiter stuff
app.enable('trust proxy');
var limiter = new RateLimit({
	windowMs: 15*60*1000, // 15 minutes 
	max: 10, // limit each IP to 10 requests per windowMs 
	delayMs: 0 // disable delaying - full speed until the max limit is reached 
});
//app.use(limiter);

app.get('/api/healthcheck', async (req, res)=>{
	res.status(200);
	res.send('200');
})

app.post('/api/validate_email', async (req, res)=>{

	/*if(!checkRequestHeaders(req.headers)){
		res.status(401);
		res.send('unauthorized');
		return;
	}

	if(req.body.api_token != tokenMap.get(req.body.access_id)){
		console.log('api/check-recaptcha: 401 due to token issue');
		res.status(401);
		res.send('unauthorized');
		return;
	}*/

	datastore_lib.validateEmail(req.body.email, (err, result)=>{
		if(err){
			console.log('error validating email: ' + JSON.stringify(err));
		}else{
			console.log('validation for '+req.body.email+': ' + result);
			res.status(200);
			res.send(result);
		}
	});

})

app.post('/api/validate_eth_address', async (req, res)=>{

	/*if(!checkRequestHeaders(req.headers)){
		res.status(401);
		res.send('unauthorized');
		return;
	}

	if(req.body.api_token != tokenMap.get(req.body.access_id)){
		console.log('api/check-recaptcha: 401 due to token issue');
		res.status(401);
		res.send('unauthorized');
		return;
	}*/

	datastore_lib.validateEthAddress(req.body.eth_address, (err, result)=>{
		if(err){
			console.log('error validating eth address: ' + JSON.stringify(err));
		}else{
			console.log('validation for '+req.body.eth_address+': ' + result);
			res.status(200);
			res.send(result);
		}
	});

})

app.post('/api/register_client', async (req, res)=>{

	if(!checkRequestHeaders(req.headers)){
		res.status(401);
		res.send('unauthorized');
		return;
	}

	//using tokens for api, but also don't want to use cookies on client-side so storing a map ._______.
	var api_token = uuidv4();
	
	console.log('api: setting access id: ' + req.body.access_id);
 	console.log('api: setting api token: ' + api_token);
	
	tokenMap.set(req.body.access_id, api_token);
	setTimeout(()=>{ tokenMap.delete(req.body.access_id); }, 2*60*60*1000);

	res.status(200);
	res.send(api_token);
})

app.post('/api/check-recaptcha', async (req, res) => {

	if(!checkRequestHeaders(req.headers)){
		res.status(401);
		res.send('unauthorized');
		return;
	}
    
    	console.log('api/check-recaptcha: received access id: ' + req.body.access_id);
    	console.log('api/check-recaptcha: received api token: ' + req.body.api_token);
    	console.log('api/check-recaptcha: existing token: ' + tokenMap.get(req.body.access_id));
	
	if(req.body.api_token != tokenMap.get(req.body.access_id)){
		console.log('api/check-recaptcha: 401 due to token issue');
		res.status(401);
		res.send('unauthorized');
		return;
	}

	if(process.env.NODE_ENV != 'prod' && process.env.NODE_ENV != 'test'){
		res.status(200);
		res.send('success');
		return;
	}

	callRecaptcha(req.body.user_response, (err, response)=>{
		if(!err && response.body.success){
			res.status(200);
			res.send('success');
		}
	})	
})

app.post('/api/email-registration',async (req, res) => {
	
	if(!checkRequestHeaders(req.headers)){
		res.status(401);
		res.send('unauthorized');
		return;
	}
    
    console.log('api/email-registration: received access id: ' + req.body.access_id);
    console.log('api/email-registration: received api token: ' + req.body.api_token);
    console.log('api/email-registration: existing token: ' + tokenMap.get(req.body.access_id));
	
	if(req.body.api_token != tokenMap.get(req.body.access_id)){
		console.log('api/email-registration: 401 due to token issue');
		res.status(401);
		res.send('unauthorized');
		return;
	}
	if(validator.isEmail(req.body.email)){

		mailChimp(req.body.email, (mailchimpResponse)=>{										
			res.status(200);
			res.send("success");
		})

	}else{ res.status(500); res.send("invalid information")}

});

app.post('/api/register', async (req, res) => {

	if(!checkRequestHeaders(req.headers)){
		console.log('api/register: 401 due to request headers');
		res.status(401);
		res.send('unauthorized');
		return;
	}
    
        console.log('api/register: received access id: ' + req.body.access_id);
        console.log('api/register: received api token: ' + req.body.api_token);
        console.log('api/register: existing token: ' + tokenMap.get(req.body.access_id));
	
       if(req.body.api_token != tokenMap.get(req.body.access_id)){
		console.log('api/register: 401 due to token issue');
		res.status(401);
		res.send('unauthorized');
		return;
	}

	//console.log('sending recaptcha check with user_response: ' + JSON.stringify(req.body.user_response));
 	//callRecaptcha(req.body.user_response, (err, response)=>{
	    //if(response){
		//console.log('got recatpcha response: ' + JSON.stringify(response));
	    //}
        //    if(!err && response.body.success){
          
	if(req.body.check){
        if(validator.isAlphanumeric(req.body.name.replace(/ /g,''))){
            if(validator.isEmail(req.body.email)){
                if(validator.isAlphanumeric(req.body.address) && req.body.address.length === 42){
                    if(validator.isAlphanumeric(req.body.country)){
                        if(validator.isDecimal(req.body.amount) && req.body.amount >= 25 && req.body.amount <= 500){
                                          
                                                datastore_lib.addRegistration({
                                name: req.body.name,
                                email: req.body.email,
                                eth_address: req.body.address,
                                country: req.body.country,
                                amount: req.body.amount,
                                residence_disclaimer: req.body.check,
                                            timestamp: new Date().toISOString()
                            }, res, (response, err, result) => {
                                if(err) {
                                        console.log('finished datastore call ERROR');
                                            response.status(500);
                                            response.send("update failed: " + JSON.stringify(err));
                                }else{
                                        console.log('finished datastore call SUCCESS');
                                                                        tokenMap.delete(req.body.access_id);
                                        
                                                                        mailChimp(req.body.email, (param)=>{                                                                            
                                                                                response.status(200);
                                                response.send("success");
                                                                        })
                                }
                            });

                        }else{ res.status(500); res.send("invalid information")}
                    }else{ res.status(500); res.send("invalid information")}
                }else{ res.status(500); res.send("invalid information")}
            }else{ res.status(500); res.send("invalid information")}
        }else{ res.status(500); res.send("invalid information")}
    }else{ res.status(500); res.send("invalid information")}

	    //}
        //})

})

if(process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'test') {
    https.createServer({
        key: fs.readFileSync('./https/key.pem'),
        cert: fs.readFileSync('./https/cert.pem')
    }, app).listen(8080, ()=>{
        console.log('api is running on port 443 with https');
    });
} else {
    app.listen(8080, function(){
        console.log('api is running on port 8080');
    })
}

function checkRequestHeaders(req_headers){

	console.log('printing request headers ...');
	console.log('req.headers.origin:  ' + req_headers.origin);
	console.log('req.headers.referer:  ' + req_headers.referer);
	console.log('req.headers.host:  ' + req_headers.host);
	console.log('req.headers[\'x-forwarded-host\']:  ' + req_headers['x-forwarded-host']);

	var targetOrigin = process.env.NODE_ENV=='prod' ? 'https://register.leverj.io' : (process.env.NODE_ENV =='test' ? 'https://leverj-test.tokenry.io' : 'http://localhost:3000');
	var targetReferer = process.env.NODE_ENV=='prod' ? 'https://register.leverj.io/' : (process.env.NODE_ENV=='test' ? 'https://leverj-test.tokenry.io/ ' : 'http://localhost:3000/');
	var targetHost = process.env.NODE_ENV=='prod' ? 'api.leverj.tokenry.io' : (process.env.NODE_ENV=='test' ? 'leverj-test-api.tokenry.io' : 'localhost:8080');

	console.log('targetOrigin: ' + targetOrigin);
	console.log('targetReferer: ' + targetReferer);
	console.log('targetHost: ' + targetHost);

	var host = req_headers.host || req_headers['x-forwarded-host'];

	if(req_headers.origin != null){
		if(req_headers.origin != targetOrigin){
			console.log('header check failed 1');
			return false;
		}
	}else
	{
		if(req_headers.referer == null){
			console.log('header check failed 2');
			return false;
		}

		if(req_headers.referer != targetReferer){
			console.log('header check failed 3');
			return false;
		}
	}

	if(host != targetHost){
		console.log('header check failed 4');
		return false;
	}

	return true;
}

function callRecaptcha( userResponse, callback){
        console.log('callRecaptcha: using: ' + process.env.RECAPTCHA_KEY);

	var options = {
		method: 'POST',
		url: 'https://www.google.com/recaptcha/api/siteverify?secret='+process.env.RECAPTCHA_KEY + '&response=' + userResponse,
		body: {
		  secret: process.env.RECAPTCHA_KEY,
		  response: userResponse
		},	
		json: true
	  }
	  request(options, function(error, response, body){
		if(error){
			console.log("Recaptcha Error: ", error);
			callback(error, response);
		}else{
			callback(null, response);
		}
	})
}

function mailChimp(email, callback){
	var options = {
		method: 'POST',
		url: 'https://us16.api.mailchimp.com/3.0/lists/'+ process.env.MAILCHIP_LIST_ID +'/members',
		headers: {
			'cache-control': 'no-cache',
			'content-type': 'application/json',
			'authorization': 'Basic ' + process.env.MAILCHIMP_API
		},
		body: {
		  email_address: email,
		  status: 'subscribed'
		},
		json: true
	  }
	  request(options, function(error, response, body){
		if(error){
			console.log("Mailchimp Error: ", error);
			callback("Error");
		}else{
			callback("success")
		}
	})
}
