import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {App, AppContainer} from './App'

require('normalize-css')
require('./style.scss')

const store = createStore(reducer);
const state = {
}
//store.dispatch(startGame(state));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
