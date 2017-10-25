///API logic
export const fetchAPIToken = (apiToken) => {
    return {
        type: 'FETCH_API_TOKEN',
        payload: apiToken,
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