///API logic
export const fetchAPIToken = (apiToken) => {
    return {
        type: 'FETCH_API_TOKEN',
        apiToken,
    };
}
export const handleAPIToken = (apiToken) => {
    return {
        type: 'ADD_API_TOKEN',
        payload: apiToken
    }
}
export const handleAPITokenError = (err) => {
    return {
        type: 'API_TOKEN_ERROR',
        payload: err
    }
}

//Captcha logic
export const fetchCaptchaResponse = (userResponse, accessID, apiToken) => {
    return { 
        type: 'FETCH_CAPTCHA_RESPONSE',
        userResponse,
        accessID,
        apiToken
    }
}
export const updateRecaptchaResponse = (userResponse) => {
    return {
        type: 'UPDATE_RECAPTCHA_RESPONSE',
        payload: userResponse
    }
}
export const setRecaptchaPassed = (boolResult) => {
    return {
        type: 'UPDATE_RECAPTCHA_PASSED',
        payload: boolResult
    }
}
export const setRecaptchaError = (result) => {
    return {
        type: 'UPDATE_RECAPTCH_ERROR'
    }
}