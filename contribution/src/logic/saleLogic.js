import { createLogic }  from 'redux-logic';
import axios            from 'axios';
import {  handleAPIToken, 
          handleAPITokenError, 
          setRecaptchaPassed, 
          setRecaptchaError } from '../actions/saleActions';

const apiRegister = createLogic({
  type: 'FETCH_API_TOKEN',
  async process({ getState, action, APIEndpoint }, dispatch, done) {
    try {
      const result = await axios.post(APIEndpoint + '/api/register_client',{ access_id: action.apiToken })
      dispatch(handleAPIToken(result.data))
    } catch (err) {
      dispatch(handleAPITokenError(err));
    }
  }
});

const checkCaptcha = createLogic({
  type: 'FETCH_CAPTCHA_RESPONSE',
  async process({ getStaet, action, APIEndpoint }, dispatch, done) {
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