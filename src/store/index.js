import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers'

let store = createStore(reducers, applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
