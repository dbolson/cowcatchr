import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import {CutsTable} from './CutsTable'
import {CutsSummary} from './CutsSummary'
import {addCut} from './actions'

const App = ({ cutTypes, cuts, summarizedCuts, onSave }) => (
  <div className="app">
    <CutsTable cutTypes={cutTypes} cuts={cuts} onSave={onSave} />
    <CutsSummary cuts={summarizedCuts} />
  </div>
)

const mappedCutTypes = (cutTypes) => {
  let mappedCutTypes = []

  for (const c in cutTypes) {
    mappedCutTypes.push(cutTypes[c])
  }

  return mappedCutTypes
}

const mappedCuts = ({ cuts, cutTypes }) => {
  let mappedCuts = []

  for (const c in cuts) {
    const cutType = cutTypes[cuts[c].type].name
    const cut = Object.assign({}, cuts[c], { type: cutType })

    mappedCuts.push(cut)
  }

  return mappedCuts
}

const summarizedCuts = (state) => {
  return [
    { id: 1, name: 'steaks', weight: 4.2, percentage: 81 },
    { id: 2, name: 'roasts', weight: 0, percentage: 0 },
    { id: 3, name: 'ground', weight: 1.0, percentage: 19 },
    { id: 4, name: 'misc.', weight: 0, percentage: 0 },
  ]
}

const mapStateToProps = (state) => {
  return {
    cutTypes: mappedCutTypes(state.cutTypes),
    cuts: mappedCuts(state),
    summarizedCuts: summarizedCuts(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (cut) => dispatch(addCut(cut))
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export {App, AppContainer}
