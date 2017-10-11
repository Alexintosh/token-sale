const initialState = {
    contactEmailName: '',
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    contactAddress: '',
    contactCountry: '',
    purchaseSize: '',
    countryCheck: false,
    termsCheck: false,
    contactFirstNameCheck: true,
    contactLastNameCheck: true,
    contactEmailCheck: true,
    contactAddressCheck: true,
    contactCountryCheck: true,
    purchaseSizeCheck: true,
    countryCheckValidation: true,
    termsCheckValidation:true,
    inProgressFlag: false,
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    stepError: false
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_IN_PROGRESS_FLAG':
            return{
                ...state,
                inProgressFlag: action.payload
            }
        case 'UPDATE_REGISTRATION_FIELD':
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'ERROR_REGISTRATION_FIELD':
            return{
                ...state,
                [action.payload]: false
            }
        case 'RESET_REGISTRATION_FIELDS':
            return {
                ...state,
                contactFirstNameCheck: true,
                contactLastNameCheck: true,
                contactEmailCheck: true,
                contactAddressCheck: true,
                contactCountryCheck: true,
                purchaseSizeCheck: true,
                countryCheckValidation: true,
                termsCheckValidation: true,
                inProgressFlag: false
            }
        case 'SUBMIT_REGISTRATION_FIELDS':
            return {
                ...state
            }
        case 'REGISTRATION_FORM_ERROR': 
            return {
                ...state
            }
        case 'SUBMIT_EMAIL_REGISTRATION':
            return {
                ...state
            }
        case 'VALIDATE_FORM_FIELDS_STEP1':
            return {
                ...state
            }
        case 'RESET_FORM_STEPS':
            return {
                ...state,
                step1: false,
                step2: false,
                step3: false,
                stepError: false
            }
        case 'SHOW_FORM_STEP':
            return {
                ...state,
                [action.payload]: true
            }
        default: {
            return state
        } 
            
    }

}