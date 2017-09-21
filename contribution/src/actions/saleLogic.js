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