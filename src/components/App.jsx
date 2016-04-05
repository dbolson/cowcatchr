import React from 'react'
import {connect} from 'react-redux';
import {CutsTable} from './CutsTable'
import {CutsSummary} from './CutsSummary'
import {addCut} from '../actions'

const App = ({ cutTypes, cuts, onSave }) => (
  <div className="app">
    <CutsTable cutTypes={cutTypes} cuts={cuts} onSave={onSave} />
    <CutsSummary cutTypes={cutTypes} cuts={cuts} />
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

const mapStateToProps = (state) => {
  return {
    cutTypes: mappedCutTypes(state.cutTypes),
    cuts: mappedCuts(state),
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
