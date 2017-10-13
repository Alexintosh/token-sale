import { combineReducers }  from 'redux';
import sale                 from './saleReducer';
import register             from './registrationReducer';
import timer                from './timerReducer';
import modal                from './modalReducer';

export const rootReducer = combineReducers({
  sale,
  register,
  timer,
  modal
});

export default rootReducer;