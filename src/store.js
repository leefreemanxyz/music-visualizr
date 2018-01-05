import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import createHashHistory from 'history/createHashHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

export const history = createHashHistory()

const routingMiddleware = routerMiddleware(history)
const reducer = combineReducers({ ...reducers,  routing: routerReducer })

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(routingMiddleware),
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export default store
