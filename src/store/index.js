// == Import : npm
import { createStore, compose, applyMiddleware } from '@reduxjs/toolkit';

// == Import : local
import rootReducer from './reducers';
import ajaxMiddleware from './middlewares/ajaxMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(ajaxMiddleware));

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;