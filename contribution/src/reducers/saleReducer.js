 
  import uuidv4 from 'uuid/v4';

  const initialState = { 
    accessId: uuidv4(),
    apiToken: '',
    userName: '',
    userEmail: '',
    userCountry: '',
    userContribution: '',
    userRegistered: false,
    termsConditions: false,
    error: null
  };
  
  export default function saleReducer(state = initialState, action) {
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
      case 'FETCH_API_TOKEN': 
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
      case 'UPDATE_RECAPTCH_ERROR':
        return {
          ...state
        }
      default: {
        return state;
      }
    }
  }
