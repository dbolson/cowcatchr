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

const onSave = (props) => {
  console.log('clicked SAVE', props)
}

const cuts = {
  1: { id: 1, type: 3, name: 'ground', weight: 1.0 },
  2: { id: 2, type: 1, name: 'new york strip', weight: 2.7 },
  3: { id: 3, type: 1, name: 'ribeye', weight: 1.5 },
}

let mappedCuts = []
for (const c in cuts) {
  const cutType = cutTypes[cuts[c].type].name
  const cut = Object.assign({}, cuts[c], { type: cutType })

  mappedCuts.push(cut)
}

const summarizedCuts = [
  { id: 1, name: 'steaks', weight: 4.2, percentage: 81 },
  { id: 2, name: 'roasts', weight: 0, percentage: 0 },
  { id: 3, name: 'ground', weight: 1.0, percentage: 19 },
  { id: 4, name: 'misc.', weight: 0, percentage: 0 },
]

ReactDOM.render(
  <App
    cutTypes={mappedCutTypes}
    cuts={mappedCuts}
    summarizedCuts={summarizedCuts}
    onSave={onSave}
  />,
  document.getElementById('app')
)
