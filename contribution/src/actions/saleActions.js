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