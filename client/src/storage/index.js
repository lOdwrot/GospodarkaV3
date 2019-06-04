import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

var store

const middlwares = [
    thunk,
    logger
]

if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    store = createStore(reducer, composeEnhancers(
      applyMiddleware(...middlwares)
    ));
  }
  
  const createStoreWithMiddleware = applyMiddleware(
      ...middlwares
  )(createStore);
  
if(store == null) store = createStoreWithMiddleware(reducer)

export default store