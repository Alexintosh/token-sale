import { createStore, applyMiddleware } from 'redux';
import { rootReducer }                  from './reducers';
import { createLogicMiddleware }        from 'redux-logic';
import logger                           from 'redux-logger';
import arrLogic                         from './logic';

const logicMiddleware = createLogicMiddleware(arrLogic);

const middleware = applyMiddleware(
    logicMiddleware,
    logger
);

const store = createStore(rootReducer, middleware);

export default store;