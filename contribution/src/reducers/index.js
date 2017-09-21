import { combineReducers }  from 'redux';
import sale                 from './saleReducer';

export const rootReducer = combineReducers({
  sale
});

export default rootReducer;