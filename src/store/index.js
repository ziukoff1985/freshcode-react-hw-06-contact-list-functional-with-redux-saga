import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

import rootSaga from '../sagas';
import contactsReducer from './reducers/contactsReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, logger);

export default createStore(contactsReducer, composeWithDevTools(middleware));

sagaMiddleware.run(rootSaga);
