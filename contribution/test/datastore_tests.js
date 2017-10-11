var datastore_lib = require('../registration/datastore.js');
require('dotenv').config();

datastore_lib.validateEmail('jsonsivar@gmail.com', (err, res)=>{
	console.log('validation for jsonsivar@gmail.com: ' + res);
});

datastore_lib.validateEmail('thisshouldreturntrue@gmail.com', (err, res)=>{
	console.log('validation for thisshouldreturntrue@gmail.com: ' + res);
});

datastore_lib.validateEthAddress('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', (err, res)=>{
	console.log('validation for 0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe: ' + res);
});

datastore_lib.validateEthAddress('thisshouldreturntrue@gmail.com', (err, res)=>{
	console.log('validation for 0xde0B295669a9FD93d5F28D9Ec85E40f4cb69dddd: ' + res);
});


/*
datastore_lib.addRegistration({
        name: req.body.name,
        email: req.body.email,
        eth_address: req.body.address,
        country: req.body.country,
        amount: req.body.amount,
        residence_disclaimer: req.body.check,
                    timestamp: new Date().toISOString()
    }, res, (response, err, result) => {

});*/