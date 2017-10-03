import { createLogic }      from 'redux-logic';
import axios                from 'axios';
import validator            from 'validator';

import {    resetRegistrationFormFields,
            errorRegistrationFormField,
            registrationFormError,
            submitEmailFormSuccess,
            submitEmailFormError }     from '../actions/registrationActions';

const APIEndpoint = 'http://localhost:8080';
//const APIEndpoint = 'https://api.leverj.test.tokenry.ca';  // TEST
//const APIEndpoint = 'https://api.leverj.tokenry.io';  // PROD

const emailRegistration = createLogic({
    type: 'SUBMIT_EMAIL_REGISTRATION',
    async process({ getState, action }, dispatch, done){
        try {
            if(validator.isEmail(getState().register.contactEmailName)){
                const result = await axios.post(APIEndpoint + '/api/email-registration',{ email: getState().register.contactEmailName });
                console.log(result);
                action.history.push('/email-signup');
                dispatch(submitEmailFormSuccess())
            }else{
                dispatch(submitEmailFormError("not a valid email"))
            }
        } catch (err) {
            dispatch(submitEmailFormError(err))
        } finally {
            done();
        }
    }
})

const userRegister = createLogic({
    type: 'SUBMIT_REGISTRATION_FIELDS',
    async process({ getState, action }, dispatch, done) {
        try {
            dispatch(resetRegistrationFormFields());
            var sale = getState().sale;
            var reg = getState().register;

            const errors = validate(reg, sale);
            if(errors.length === 0){
                const result = await axios.post(APIEndpoint + '/api/register',{
                    access_id: sale.accessId,
                    api_token: sale.apiToken,
                    name: reg.contactName,
                    email: reg.contactEmail,
                    address: reg.contactAddress,
                    country: reg.contactCountry,
                    amount: reg.purchaseSize,
                    check: reg.countryCheck,
                    user_response: reg.captchaPassed
                })
                console.log(result);
                action.history.push('/success');
                done();
            }else {
                errors.forEach(error => { dispatch(error) })
                done();
            }
        } catch (err) {
            dispatch(registrationFormError(err));
        } finally {
            done()
        }
    }
});

function validate (reg, sale) {
    const errors = []; 
    if(!sale.captchaPassed)
        errors.push(errorRegistrationFormField('Recaptcha')); 
    if(!validator.isAlphanumeric(reg.contactName.replace(/ /g,'')))
        errors.push(errorRegistrationFormField('contactNameCheck'));
    if(!validator.isEmail(reg.contactEmail))
        errors.push(errorRegistrationFormField('contactEmailCheck'));
    if(!validator.isAlphanumeric(reg.contactCountry))
        errors.push(errorRegistrationFormField('contactCountryCheck'));
    if(!(validator.isAlphanumeric(reg.contactAddress) && reg.contactAddress.length === 42))
        errors.push(errorRegistrationFormField('contactAddressCheck'));
    if(!(validator.isDecimal(reg.purchaseSize) && reg.purchaseSize >= 25 && reg.purchaseSize <= 500))
        errors.push(errorRegistrationFormField('purchaseSizeCheck'));
    if(!reg.countryCheck)
        errors.push(errorRegistrationFormField('countryCheckValidation'));
    if(!reg.termsCheck)
        errors.push(errorRegistrationFormField('termsCheckValidation'));
    return errors;
}

export default [
    userRegister,
    emailRegistration
]