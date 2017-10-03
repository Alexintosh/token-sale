const initialState = {
    contactName: '',
    contactEmail: '',
    contactAddress: '',
    contactCountry: '',
    purchaseSize: '',
    countryCheck: false,
    termsCheck: false,
    contactNameCheck: true,
    contactEmailCheck: true,
    contactAddressCheck: true,
    contactCountryCheck: true,
    purchaseSizeCheck: true,
    countryCheckValidation: true,
    termsCheckValidation:true
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_REGISTRATION_FIELD':
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'RESET_REGISTRATION_FIELDS':
            return {
                ...state,
                contactNameCheck: true,
                contactEmailCheck: true,
                contactAddressCheck: true,
                contactCountryCheck: true,
                purchaseSizeCheck: true,
                countryCheckValidation: true,
                termsCheckValidation: true
            }
        default: {
            return state
        } 
            
    }

}