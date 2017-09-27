var express     = require('express');
//var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var validator   = require('validator');
var db          = require('./models');
var datastore_lib = require('./datastore.js');
var RateLimit   = require('express-rate-limit');
const uuidv4    = require('uuid/v4');
const app       = express();

var tokenMap = new Map();

//TODO: Need to read up more on the bodyparser docs
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({origin: '*'})); //TODO:should change this for deployment

// rate limiter stuff
app.enable('trust proxy');
var limiter = new RateLimit({
	windowMs: 15*60*1000, // 15 minutes 
	max: 2, // limit each IP to 100 requests per windowMs 
	delayMs: 0 // disable delaying - full speed until the max limit is reached 
});
app.use(limiter);

app.post('/api/register_client', (req, res)=>{

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

app.post('/api/register',(req, res) => {

	if(!checkRequestHeaders(req.headers)){
		console.log('api/register: 401 due to request headers');
		console.logres.status(401);
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

	if(req.body.check){
        if(validator.isAlphanumeric(req.body.name.replace(/ /g,''))){
            if(validator.isEmail(req.body.email)){
                if(validator.isAlphanumeric(req.body.address) && req.body.address.length === 42){
                    if(validator.isAlphanumeric(req.body.country)){
                        if(validator.isCurrency(req.body.amount) && req.body.amount >= 25 && req.body.amount <= 500){
                            
                            const user = new db.User({
                                name: req.body.name,
                                email: req.body.email,
                                address: req.body.address,
                                country: req.body.country,
                                amount: req.body.amount,
                                residency: req.body.check
                            })
    
                            //user.save(function(err){ if(err) console.log(err); })
			
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
		                            response.status(501);
		                            response.send("update failed");
                            	}else{
                            		console.log('finished datastore call SUCCESS');
					    			tokenMap.delete(req.body.access_id);
		                            response.status(200);
		                            response.send("success");
                            	}
                            });

                        }else{ res.status(501); res.send("invalid information")}
                    }else{ res.status(501); res.send("invalid information")}
                }else{ res.status(501); res.send("invalid information")}
            }else{ res.status(501); res.send("invalid information")}
        }else{ res.status(501); res.send("invalid information")}
    }else{ res.status(501); res.send("invalid information")}
})

app.listen(8080, function(){
    console.log('api is running on port 8080');
})

function checkRequestHeaders(req_headers){

	console.log('printing request headers ...');
	console.log('req.headers.origin:  ' + req_headers.origin);
	console.log('req.headers.referer:  ' + req_headers.referer);
	console.log('req.headers.host:  ' + req_headers.host);
	console.log('req.headers[\'x-forwarded-host\']:  ' + req_headers['x-forwarded-host']);

	var targetOrigin = process.env.NODE_ENV=='prod' ? 'https://register.leverj.io' : (process.env.NODE_ENV =='test' ? 'https://registration-leverj-io.global.ssl.fastly.net' : 'http://localhost:3000');
	var targetReferer = process.env.NODE_ENV=='prod' ? 'https://register.leverj.io/' : (process.env.NODE_ENV=='test' ? 'https://registration-leverj-io.global.ssl.fastly.net/ ' : 'http://localhost:3000/');
	var targetHost = process.env.NODE_ENV=='prod' ? 'api.leverj.io' : (process.env.NODE_ENV=='test' ? 'api-leverj-io.global.ssl.fastly.net' : 'localhost:8080');

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
