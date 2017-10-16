import { createStore, applyMiddleware } from 'redux';
import { rootReducer }                  from './reducers';
import { createLogicMiddleware }        from 'redux-logic';
import arrLogic                         from './logic';

const APIEndpoint = 'http://localhost:8080';
//const APIEndpoint = 'https://leverj-test-api.tokenry.io';  // TEST
//const APIEndpoint = 'https://leverj-api.tokenry.io';  // PROD

const logicMiddleware = createLogicMiddleware(arrLogic, { APIEndpoint });

const middleware = applyMiddleware(
    logicMiddleware
);

const store = createStore(rootReducer, middleware);

export default store;
