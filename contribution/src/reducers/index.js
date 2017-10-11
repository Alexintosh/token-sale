import { combineReducers }  from 'redux';
import sale                 from './saleReducer';
import register             from './registrationReducer';
import timer                from './timerReducer';

export const rootReducer = combineReducers({
  sale,
  register,
  timer
});

export default rootReducer;