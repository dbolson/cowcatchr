import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {fetchCuts} from './actions'
import reducer from './reducer'
import {AppContainer} from './components/App'

require('normalize-css')
require('./style.scss')

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
)

store.dispatch(fetchCuts())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
