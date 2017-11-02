// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

module.exports.validateEmail = function(email, callback){
    console.log("starting datastorelib registration function");

  // Your Google Cloud Platform project ID
  const projectId = process.env.NODE_ENV=='prod' ? 'leverj-prod' : (process.env.NODE_ENV =='test' ? 'consensys-leverj' : 'consensys-leverj'); //consensys-leverj is a legacy name repurposed as dev project in GCP
  
  var keyfile = process.env.DATASTORE_API_KEY_FILE;

  if(keyfile == '' || keyfile === undefined){console.log("ERROR: please provide a keyfile");return;}

  console.log('using keyfilename: ' + keyfile);

  var targetNamespace = process.env.NODE_ENV || 'dev';

  // Instantiates a client
  const datastore = Datastore({
    projectId: projectId,
    keyFilename: keyfile,
    namespace: targetNamespace
  });

  var query = datastore.createQuery('RegistrationEntry');
  query.filter('email', email);
  datastore.runQuery(query, (err, entities)=>{
    if(err){
      console.log('error checking email: ' + JSON.stringify(err));
      callback(err, null);
    }

    console.log('got back entities with count ' + entities.length);
    if(!entities || entities.length < 1){
      callback(null, true);
    }else{
      callback(null, false);
    }
  });

}

module.exports.validateEthAddress = function(ethAddress, callback){
    console.log("starting datastorelib registration function");

  // Your Google Cloud Platform project ID
  const projectId = process.env.NODE_ENV=='prod' ? 'leverj-prod' : (process.env.NODE_ENV =='test' ? 'consensys-leverj' : 'consensys-leverj'); //consensys-leverj is a legacy name repurposed as dev project in GCP
  
  var keyfile = process.env.DATASTORE_API_KEY_FILE;

  if(keyfile == '' || keyfile === undefined){console.log("ERROR: please provide a keyfile");return;}

  console.log('using keyfilename: ' + keyfile);

  var targetNamespace = process.env.NODE_ENV || 'dev';

  // Instantiates a client
  const datastore = Datastore({
    projectId: projectId,
    keyFilename: keyfile,
    namespace: targetNamespace
  });

  console.log('checking eth address:' + ethAddress);

  var query = datastore.createQuery('RegistrationEntry');
  query.filter('eth_address', ethAddress);
  datastore.runQuery(query, (err, entities)=>{
    if(err){
      console.log('error checking ethaddress: ' + JSON.stringify(err));
      callback(err, null);
    }

    console.log('got back entities:' + entities.length);
    if(!entities || entities.length < 1){
      callback(null, true);
    }else{
      callback(null, false);
    }
  });

}

module.exports.addRegistration = function(regData, res, callback){

  console.log("starting datastorelib registration function");

  // Your Google Cloud Platform project ID
  const projectId = process.env.NODE_ENV=='prod' ? 'leverj-prod' : (process.env.NODE_ENV =='test' ? 'consensys-leverj' : 'consensys-leverj'); //consensys-leverj is a legacy name repurposed as dev project in GCP
  
  var keyfile = process.env.DATASTORE_API_KEY_FILE;

  if(keyfile == '' || keyfile === undefined){console.log("ERROR: please provide a keyfile");return;}

  console.log('using keyfilename: ' + keyfile);

  var targetNamespace = process.env.NODE_ENV || 'dev';

  // Instantiates a client
  const datastore = Datastore({
    projectId: projectId,
    keyFilename: keyfile,
    namespace: targetNamespace
  });

  var query = datastore.createQuery('RegistrationEntry');
  query.filter('email', regData.email);
  datastore.runQuery(query, (err, entities)=>{
  	console.log('got back entities with count ' + entities.length);

	if(!entities || entities.length < 1){
		// The kind for the new entity
  		const kind = 'RegistrationEntry';

		// The Cloud Datastore key for the new entity
		const registrationKey = datastore.key([kind]);

  		// Prepares the new entity
  		const registration = {
    			key: registrationKey,
    			data: regData
  		};

  		// Saves the entity
  		datastore.save(registration)
   		.then(() => {
      			console.log(`Saved ${registration.key.name}: ${registration.data.email}`);
      			callback(res, null, true);
    		})
    		.catch((err) => {
      			console.error('ERROR:', err);
      			callback(res, err, null);
    		});

  		console.log("finished datastorelib registration function");

	}else{
		console.log('error email already exists');
		callback(res, 'email already exists', null);
	}

  });


}
module.exports.addEmail = function(regData, res, callback){

  console.log("starting datastorelib registration function");

  // Your Google Cloud Platform project ID
  const projectId = process.env.NODE_ENV=='prod' ? 'leverj-prod' : (process.env.NODE_ENV =='test' ? 'consensys-leverj' : 'consensys-leverj'); //consensys-leverj is a legacy name repurposed as dev project in GCP
  
  var keyfile = process.env.DATASTORE_API_KEY_FILE;

  if(keyfile == '' || keyfile === undefined){console.log("ERROR: please provide a keyfile");return;}

  console.log('using keyfilename: ' + keyfile);

  var targetNamespace = process.env.NODE_ENV || 'dev';

  // Instantiates a client
  const datastore = Datastore({
    projectId: projectId,
    keyFilename: keyfile,
    namespace: targetNamespace
  });

  var query = datastore.createQuery('RegistrationEntry');
  console.log(regData)
  query.filter('email', regData.email);
  datastore.runQuery(query, (err, entities)=>{
  	console.log('got back entities with count ' + entities.length);

	if(!entities || entities.length < 1){
		// The kind for the new entity
  		const kind = 'RegistrationEntry';

		// The Cloud Datastore key for the new entity
		const registrationKey = datastore.key([kind]);

  		// Prepares the new entity
  		const registration = {
    			key: registrationKey,
    			data: regData
  		};
      console.log("here")
  		// Saves the entity
  		datastore.save(registration)
   		.then(() => {
      			console.log(`Saved ${registration.key.name}: ${registration.data.email}`);
      			callback(res, null, true);
    		})
    		.catch((err) => {
      			console.error('ERROR:', err);
      			callback(res, err, null);
    		});

  		console.log("finished datastorelib registration function");

	}else{
		console.log('error email already exists');
		callback(res, 'email already exists', null);
	}
  });
}
