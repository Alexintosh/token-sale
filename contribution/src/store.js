import { createStore, applyMiddleware } from 'redux';
import { rootReducer }                  from './reducers';
import { createLogicMiddleware }        from 'redux-logic';
import logger                           from 'redux-logger';
import arrLogic                         from './logic';
import axios from 'axios';

const logicMiddleware = createLogicMiddleware(arrLogic, { axios });

const middleware = applyMiddleware(
    logicMiddleware,
    logger
);

const store = createStore(rootReducer, middleware);

export default store;