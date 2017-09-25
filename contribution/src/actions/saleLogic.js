//import { registerUser, signTransaction }   from '../utils/metaMask';
//import axios from 'axios';

export const handleUserInputChange = (n, v) => {
  return dispatch => {
    dispatch({ 
      type: 'UPDATE_USER', 
      payload: {
        name: n,
        value: v
      }});
  };
};
export const handleUserCheckChange = (val) => {
  return {
    type: 'TERMS_CONDITIONS',
    payload: val
  }
}
export const handleUserInformationSubmission = (name, email, country, terms) => {
  return dispatch => {
    ///Do logic here to check if each one of the fields is correct
    ///Also should probably get an updated metamask information
    if(terms === true){
      dispatch({
        type: 'USER_REGISTERED'
      })
    }
  }
}
export const userRegister = (name, email, address, country, amount, countryCheck, callback) => {
  callback({error: null})
  // signTransaction(name, email, address, country, amount, countryCheck, (res)=>{
  //   console.log(res);
  // })  

  // axios.post('http://localhost:8080/api/register',{
  //   name: name,
  //   email: email,
  //   address: address,
  //   country: country,
  //   amount: amount,
  //   check: countryCheck
  // }).then(function(res){
  //   console.log(res);
  //   callback("success")
  // }).catch(function(err){
  //   console.log(err)
  //   callback("error")
  // })
}