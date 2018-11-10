// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './modules'

const middleware = [thunk, promiseMiddleware()]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
