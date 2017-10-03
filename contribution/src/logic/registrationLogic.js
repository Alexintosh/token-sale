//import { createLogic }  from 'redux-logic';
import axios            from 'axios';


const APIEndpoint = 'http://localhost:8080';
//const APIEndpoint = 'https://api.leverj.test.tokenry.ca';  // TEST
//const APIEndpoint = 'https://api.leverj.tokenry.io';  // PROD

export async function userEmailRegistration (email, callback) {
    try {
        const result = await axios.post(APIEndpoint + '/api/email-registration',{ email: email });
        console.log(result); callback({ error: null, res: "success" })
    } catch (err) {
        callback({ error: err, res: null })
    }
}
  
export async function userRegister (name, email, address, country, amount, countryCheck, accessId, apiToken, recaptchaResponse, callback) {
    try {
        const result = await axios.post(APIEndpoint + '/api/register',{
            access_id: accessId,
            api_token: apiToken,
            name: name,
            email: email,
            address: address,
            country: country,
            amount: amount,
            check: countryCheck,
            user_response: recaptchaResponse
        })
        console.log(result); callback({error : null, res: "success" })
    } catch (err) {
        console.log(err); callback({ error: err, res: null })
    }
}