 
  import uuidv4 from 'uuid/v4';

  const initialState = { 
    accessId: uuidv4(),
    apiToken: '',
    userName: '',
    userEmail: '',
    userCountry: '',
    userContribution: '',
    userRegistered: true,
    termsConditions: false,
    recaptchaUserResponse: '',
    captchaPassed: true, //this should be set to false in non-dev environments 
    error: null
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
      case 'USER_REGISTERED': 
        return {
          ...state,
          userRegistered: true
        }
      case 'TERMS_CONDITIONS':
        return {
          ...state,
          termsConditions: action.payload
       }
      case 'FETCH_API': 
       return {
         ...state
       }
      case 'ADD_API_TOKEN':
	       return { 
	       ...state,
	       apiToken: action.payload
       }
      case 'API_TOKEN_ERROR':
       return {
         ...state
       }
      case 'FETCH_CAPTCHA_RESPONSE': 
       return {
         ...state
       }
      case 'UPDATE_RECAPTCHA_RESPONSE':
         return { 
         ...state,
         recaptchaUserResponse: action.payload
      }
      case 'UPDATE_RECAPTCHA_PASSED':
         return { 
         ...state,
         captchaPassed: action.payload
      }
      case 'UPDATE_RECAPTCH_ERROR':
        return {
          ...state
        }
      default: {
        return state;
      }
    }
  }
