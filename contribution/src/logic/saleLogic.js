import { createLogic }          from 'redux-logic';
import axios                    from 'axios';
import {  handleAPIToken, 
          handleAPITokenError } from '../actions/saleActions';

const apiRegister = createLogic({
  type: 'FETCH_API_TOKEN',
  async process({ getState, action, APIEndpoint }, dispatch, done) {
    try {
      const result = await axios.post(APIEndpoint + '/api/register_client',{ access_id: action.payload })
      dispatch(handleAPIToken(result.data))
      done();
    } catch (err) {
      dispatch(handleAPITokenError(err));
      done()
    }
  }
});

export default [
  apiRegister
]