import React from 'react'
import ReactDOM from 'react-dom'
import {CutsTable} from './CutsTable'
import {CutsSummary} from './CutsSummary'

const App = ({ cutTypes, cuts, summarizedCuts, onSave }) => (
  <div className="app">
    <CutsTable cutTypes={cutTypes} cuts={cuts} onSave={onSave} />
    <CutsSummary cuts={summarizedCuts} />
  </div>
)

export {App}
