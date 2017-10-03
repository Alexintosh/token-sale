import { createLogic }  from 'redux-logic';
import axios            from 'axios';
import {  handleAPIToken, 
          handleAPITokenError, 
          setRecaptchaPassed, 
          setRecaptchaError } from '../actions/saleActions';

const APIEndpoint = 'http://localhost:8080';
//const APIEndpoint = 'https://api.leverj.test.tokenry.ca';  // TEST
//const APIEndpoint = 'https://api.leverj.tokenry.io';  // PROD


const apiRegister = createLogic({
  type: 'FETCH_API_TOKEN',
  async process({ getState, action }, dispatch, done) {
    try {
      console.log("here");
      const result = await axios.post(APIEndpoint + '/api/register_client',{ access_id: action.apiToken })
      console.log("HERE", result.data)
      dispatch(handleAPIToken(result.data))
    } catch (err) {
      dispatch(handleAPITokenError(err));
    }
  }
});

const checkCaptcha = createLogic({
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

export default [
  apiRegister,
  checkCaptcha
]