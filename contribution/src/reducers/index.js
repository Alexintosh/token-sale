import { combineReducers }  from 'redux';
import sale                 from './saleReducer';
import register             from './registrationReducer';
import timer                from './timerReducer';
import modal                from './modalReducer';
import sticky               from './stickyReducer';

export const rootReducer = combineReducers({
  sale,
  register,
  timer,
  modal,
  sticky
});

export default rootReducer;