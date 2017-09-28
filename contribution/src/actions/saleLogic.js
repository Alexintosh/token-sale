//import { registerUser, signTransaction }   from '../utils/metaMask';
import axios from 'axios';

export const handleUserInputChange = (n, v) => {
  return dispatch => {
    dispatch({ 
      type: 'UPDATE_USER', 
      payload: {
        name: n,
        value: v
      }});
  };
};
export const handleUserCheckChange = (val) => {
  return {
    type: 'TERMS_CONDITIONS',
    payload: val
  }
}
export const handleUserInformationSubmission = (name, email, country, terms) => {
  return dispatch => {
    ///Do logic here to check if each one of the fields is correct
    ///Also should probably get an updated metamask information
    if(terms === true){
      dispatch({
        type: 'USER_REGISTERED'
      })
    }
  }
}
export const handleAPIToken = (apiToken) => {
  return dispatch => {
    dispatch({
      type: 'ADD_API_TOKEN',
      payload: apiToken
    })
  }
}

export const userEmailRegistration = (email, callback) => {
  axios.post('http://localhost:8080/api/email-registration',{
    email: 'stuarth323@gmail.com'
  }).then(function(res){
    console.log(res);
    callback("success")
  }).catch(function(err){
    console.log(err)
    callback("error")
  })
}

export const userRegister = (name, email, address, country, amount, countryCheck, accessId, apiToken, callback) => {

  axios.post('http://localhost:8080/api/register',{
    access_id: accessId,
    api_token: apiToken,
    name: name,
    email: email,
    address: address,
    country: country,
    amount: amount,
    check: countryCheck
  }).then(function(res){
    console.log(res);
    callback("success")
  }).catch(function(err){
    console.log(err)
    callback("error")
  })
}

export const apiRegister = (accessId, callback) => {
  console.log("JS: getting here, starting apiregistercall");

  axios.post('http://localhost:8080/api/register_client',{
    access_id: accessId
  }).then(function(res){
    console.log(res);
    console.log('JS: after apiregistercallback being called with input: ' + JSON.stringify(res));
    callback(res.data);
  }).catch(function(err){
    console.log(err);
    console.log('JS: after apiregistercallback ERROR');
    callback("error");
  })
}
