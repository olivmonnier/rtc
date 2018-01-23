import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from "redux-thunk"
import * as promiseMiddleware from "redux-promise"
import { Provider } from 'react-redux'
import App from './Containers/App.jsx'
import appReducer from './Reducers'

const storeEnhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  )
)

const store = createStore(appReducer, storeEnhancer)

render(<Provider store={store}>
  <App />
</Provider>, document.querySelector('root'))