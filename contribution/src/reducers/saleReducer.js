 
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
      case 'ADD_API_TOKEN':
	return { 
	  ...state,
	  apiToken: action.payload
	}
      default: {
        return state;
      }
    }
  }
