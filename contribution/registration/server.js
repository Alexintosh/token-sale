var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var validator   = require('validator');
var db          = require('./models');
const app       = express();

mongoose.connect('mongodb://localhost:27017/leverj',{ 
    useMongoClient: true
}).then(()=>{console.log("connected to mongodb")
}).catch((err)=>console.log("err:", err))

//Need to read up more on the bodyparser docs
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));
//should change this for deployment

app.post('/api/register',(req, res) => {
    if(req.body.check){
        if(validator.isAlphanumeric(req.body.name.replace(/ /g,''))){
            if(validator.isEmail(req.body.email)){
                if(validator.isAlphanumeric(req.body.address) && req.body.address.length === 42){
                    if(validator.isAlphanumeric(req.body.country)){
                        if(validator.isCurrency(req.body.amount)){
                            
                            const user = new db.User({
                                name: req.body.name,
                                email: req.body.email,
                                address: req.body.address,
                                country: req.body.country,
                                amount: req.body.amount,
                                residency: req.body.check
                            })
                            user.save(function(err){ if(err) console.log(err); })
                            res.status(200);
                            res.send("success");

                        }else{ res.status(200); res.send("invalid information")}
                    }else{ res.status(200); res.send("invalid information")}
                }else{ res.status(200); res.send("invalid information")}
            }else{ res.status(200); res.send("invalid information")}
        }else{ res.status(200); res.send("invalid information")}
    }else{ res.status(200); res.send("invalid information")}
})

app.listen(8080, function(){
    console.log('api is running on port 8080');
})