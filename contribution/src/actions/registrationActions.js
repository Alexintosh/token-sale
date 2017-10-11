export const updateRegisterFormField = (name, value) => {
    return {
        type: 'UPDATE_REGISTRATION_FIELD',
        payload: {
            name,
            value
        }
    }
}

export const resetRegistrationFormFields = () => {
    return {
        type: 'RESET_REGISTRATION_FIELDS'
    }
}

export const submitRegistrationFormFields = (history) => {
    return {
        type: 'SUBMIT_REGISTRATION_FIELDS',
        history
    }
}

export const formSuccess = () => {
    return {
        type: 'SUBMIT_REGISTRATION_FIELDS_SUCCESS'
    }
}

export const formError = () => {
    return {
        type: 'SUBMIT_REGISTRATION_FIELDS_ERROR'
    }
}

export const formSubmit = () => {
    return {
        type: 'SUBMIT_REGISTRATION_FIELDS_START'
    }
}

export const errorRegistrationFormField = (name) => {
    return {
        type: 'ERROR_REGISTRATION_FIELD',
        payload: name
    }
}

export const registrationFormError = (err) => {
    return {
        type: 'REGISTRATION_FORM_ERROR',
        payload: err
    }
}

export const submitEmailForm = (history) => {
    return {
        type: 'SUBMIT_EMAIL_REGISTRATION',
        history
    }
}

export const submitEmailFormSuccess = () => {
    return {
        type: 'SUBMIT_EMAIL_FORM_SUCCESS'
    }
}

export const submitEmailFormError = (err) => {
    return {
        type: 'SUBMIT_EMAIL_FORM_ERROR'
    }
}



/////FORM STEPS 
export const validateFields = () => {
    return {
        type: 'VALIDATE_FORM_FIELDS_STEP1'
    }
}

export const changeFormStep = (name) => {
    return { 
        type: 'SHOW_FORM_STEP',
        payload: name
    }
}

export const resetFormSteps = () => {
    return {
        type: 'RESET_FORM_STEPS'
    }
}

export const validateAddressField = () => {
    return {
        type: 'VALIDATE_ADDRESS_FIELD'
    }
}