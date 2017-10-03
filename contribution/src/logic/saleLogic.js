import { createLogic }  from 'redux-logic';
import axios            from 'axios';
import {  handleAPIToken, 
          handleAPITokenError, 
          setRecaptchaPassed, 
          setRecaptchaError } from '../actions/saleActions';

const APIEndpoint = 'http://localhost:8080';
//const APIEndpoint = 'https://api.leverj.test.tokenry.ca';  // TEST
//const APIEndpoint = 'https://api.leverj.tokenry.io';  // PROD


// export async function checkServerRecaptcha (userResponse, accessId, apiToken, callback) {
//     try {
//         const result = await axios.post(APIEndpoint + '/api/check-recaptcha',{
//             user_response: userResponse,
//             access_id: accessId,
//             api_tokens: apiToken
//         });
//         callback(result.body.success ? "success" : "error");
//     } catch (err) { callback("error"); }
// }
  
export async function userEmailRegistration (email, callback) {
    try {
        const result = await axios.post(APIEndpoint + '/api/email-registration',{ email: 'jsonsivar@gmail.com' });
        console.log(result); callback({ error: null, res: "success" })
    } catch (err) {
        callback({ error: err, res: null })
    }
}
  
export async function userRegister (name, email, address, country, amount, countryCheck, accessId, apiToken, recaptchaResponse, callback) {
    try {
        const result = await axios.post(APIEndpoint + '/api/register',{
            access_id: accessId,
            api_token: apiToken,
            name: name,
            email: email,
            address: address,
            country: country,
            amount: amount,
            check: countryCheck,
            user_response: recaptchaResponse
        })
        console.log(result); callback({error : null, res: "success" })
    } catch (err) {
        console.log(err); callback({ error: err, res: null })
    }
}

export const apiRegister = createLogic({
  type: 'FETCH_API_TOKEN',
  async process({ getState, action }, dispatch, done) {
    try {
      const result = await axios.post(APIEndpoint + '/api/register_client',{ access_id: action.apiToken })
      console.log('JS: after apiregistercallback being called with input: ' + JSON.stringify(result));
      dispatch(handleAPIToken(result.data))
    } catch (err) {
      dispatch(handleAPITokenError(err));
    }
  }
});

export const checkCaptcha = createLogic({
  type: 'FETCH_CAPTCHA_RESPONSE',
  async process({ getStaet, action }, dispatch, done) {
    try {
      const result = await axios.post(APIEndpoint + '/api/check-recaptcha',{
          user_response: action.userResponse,
          access_id: action.accessId,
          api_tokens: action.apiToken
      });      
      if(result.body.success) 
        dispatch(setRecaptchaPassed(true));
      else 
        dispatch(setRecaptchaPassed(false));
    } catch (err) { 
        dispatch(setRecaptchaError(err));
    }
  }
})