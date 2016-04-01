import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'

require('normalize-css')

const cutTypes = {
  1: { id: 1, name: 'steak' },
  2: { id: 2, name: 'roast' },
  3: { id: 3, name: 'ground' },
  4: { id: 4, name: 'misc' },
}
let mappedCutTypes = []

for (const c in cutTypes) {
  mappedCutTypes.push(cutTypes[c])
}

ReactDOM.render(
  <App cutTypes={mappedCutTypes} />,
  document.getElementById('app')
)
