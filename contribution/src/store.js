import { createStore, applyMiddleware } from 'redux';
import { rootReducer }                  from './reducers';
import { createLogicMiddleware }        from 'redux-logic';
import logger                           from 'redux-logger';
import arrLogic                         from './logic';

const APIEndpoint = 'http://localhost:8080';
//const APIEndpoint = 'https://api.leverj.test.tokenry.ca';  // TEST
//const APIEndpoint = 'https://api.leverj.tokenry.io';  // PROD

const logicMiddleware = createLogicMiddleware(arrLogic, { APIEndpoint });

const middleware = applyMiddleware(
    logicMiddleware,
    logger
);

const store = createStore(rootReducer, middleware);

export default store;