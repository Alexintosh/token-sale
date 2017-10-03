import { combineReducers }  from 'redux';
import sale                 from './saleReducer';
import register             from './registrationReducer';

export const rootReducer = combineReducers({
  sale,
  register
});

export default rootReducer;