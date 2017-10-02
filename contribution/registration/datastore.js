// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

module.exports.addRegistration = function(regData, res, callback){

  console.log("starting datastorelib registration function");

  // Your Google Cloud Platform project ID
  const projectId = process.env.NODE_ENV=='prod' ? 'leverj-prod' : (process.env.NODE_ENV =='test' ? 'leverj-test' : 'consensys-leverj'); //consensys-leverj is a legacy name repurposed as dev project in GCP
  
  var keyfile = process.env.DATASTORE_API_KEY_FILE;

  if(keyfile == '' || keyfile === undefined){console.log("ERROR: please provide a keyfile");return;}

  var targetNamespace = process.env.NODE_ENV || 'dev';

  // Instantiates a client
  const datastore = Datastore({
    projectId: projectId,
    keyFilename: keyfile,
    namespace: targetNamespace
  });

  console.log("instantiated datastore object");

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

}
