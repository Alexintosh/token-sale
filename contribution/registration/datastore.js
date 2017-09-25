// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

module.exports.addRegistration = function(regData){

  console.log("starting datastorelib registration function");

  // Your Google Cloud Platform project ID
  const projectId = 'consenssys-leverj';

  var keyfile = '';

  if(keyfile == '' || keyfile === undefined){console.log("ERROR: please provide a keyfile");return;}

  // Instantiates a client
  const datastore = Datastore({
    projectId: projectId,
    keyFilename: keyfile,
    namespace: 'dev' // TODO: this should come from configuration file
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
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });

  console.log("finished datastorelib registratio function");

}
