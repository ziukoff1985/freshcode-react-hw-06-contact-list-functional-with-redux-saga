import { createStore } from 'redux';
import { applyMiddleware } from 'redux'; // метод для додавання middleware
import { composeWithDevTools } from '@redux-devtools/extension'; // для роботи Redux DevTools
import logger from 'redux-logger'; // для middleware - logger

import createSagaMiddleware from 'redux-saga'; // ! SAGA

import contactsReducer from './reducers/contactsReducer';

const sagaMiddleware = createSagaMiddleware(); // ! SAGA

const middleware = applyMiddleware(sagaMiddleware, logger); // ! додавання middleware logger i saga

export default createStore(contactsReducer, composeWithDevTools(middleware));

sagaMiddleware.run(); // ! SAGA
