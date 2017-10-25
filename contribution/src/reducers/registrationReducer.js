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
    duplicateEmail: true,
    duplicateAddress: true,
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    submission: false,
    stepError: false
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
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
                duplicateAddress: true,
                duplicateEmail: true

            }
        case 'SUBMIT_REGISTRATION_FIELDS':
            return {
                ...state
            }
        case 'SUBMIT_REGISTRATION_FIELDS_START':
            return {
                ...state,
                submission: true
            }
        case 'SUBMIT_REGISTRATION_FIELDS_SUCCESS':
            return {
                ...state,
                submission: false
            }
        case 'SUBMIT_REGISTRATION_FIELDS_ERROR':
            return {
                ...state,
                submission: false
            }
        case 'REGISTRATION_FORM_ERROR': 
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