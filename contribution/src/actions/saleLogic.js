//import { registerUser, signTransaction }   from '../utils/metaMask';
import axios from 'axios';

const APIEndpoint = 'http://localhost:8080';
//const APIEndpoint = 'https://api.leverj.test.tokenry.ca';  // TEST
//const APIEndpoint = 'https://api.leverj.tokenry.io';  // PROD

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
export const updateRecaptchaResponse = (userResponse) => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_RECAPTCHA_RESPONSE',
      payload: userResponse
    })
  }
}
export const setRecaptchaPassed = (boolResult) => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_RECAPTCHA_PASSED',
      payload: boolResult
    })
  }
}

export const checkServerRecaptcha = (userResponse, accessId, apiToken, callback) => {
  axios.post(APIEndpoint + '/api/check-recaptcha',{
    user_response: userResponse,
    access_id: accessId,
    api_tokens: apiToken
  }).then(function(res){
    console.log(res);
    if(res.body.success){
      callback("success")
    }else{
      callback("error")
    }
  }).catch(function(err){
    console.log(err)
    callback("error")
  })
}

export const userEmailRegistration = (email, callback) => {
  axios.post(APIEndpoint + '/api/email-registration',{
    email: 'jsonsivar@gmail.com'
  }).then(function(res){
    console.log(res);
    callback("success")
  }).catch(function(err){
    console.log(err)
    callback("error")
  })
}

export const userRegister = (name, email, address, country, amount, countryCheck, accessId, apiToken, recaptchaResponse, callback) => {

  axios.post(APIEndpoint + '/api/register',{
    access_id: accessId,
    api_token: apiToken,
    name: name,
    email: email,
    address: address,
    country: country,
    amount: amount,
    check: countryCheck,
    user_response: recaptchaResponse
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

  axios.post(APIEndpoint + '/api/register_client',{
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
