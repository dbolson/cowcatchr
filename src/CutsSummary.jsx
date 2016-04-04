import React from 'react'
import {CutSummaryRow} from './CutSummaryRow'

const summarizedCuts = ({ cuts, cutTypes }) => {
  const weights = cutWeights(cuts, cutTypes)

  return Object.keys(weights).map((key, i) => {
    return {
      id: i + 1,
      name: key,
      weight: weights[key],
      percentage: Math.round((weights[key] / totalWeight(weights)) * 100),
    }
  })
}

const cutWeights = (cuts, cutTypes) => {
  return cuts.reduce((acc, cut) => {
    const typeName = cutTypes.find(type => (type.name === cut.type))

    if (acc[typeName.name] !== undefined) {
      acc[typeName.name] += cut.weight
    }
    return acc
  }, initialSums(cutTypes))
}

const initialSums = (cutTypes) => {
  return cutTypes.reduce((acc, row) => {
    acc[row.name] = 0
    return acc
  }, {})
}

const totalWeight = (cuts) => {
  return Object.keys(cuts).reduce((acc, key) => {
    return acc += cuts[key]
  }, 0)
}

const CutsSummary = ({ cuts, cutTypes }) => (
  <div className="cuts-summary">
    <h1>Summary</h1>
    <div>
      <div className="row-header">
        <span className="name">Type</span>
        <span className="weight">Weight</span>
        <span className="percentage">%</span>
      </div>
      {summarizedCuts({ cuts, cutTypes }).map(cut =>
        <CutSummaryRow key={cut.id} cut={cut} />
      )}
    </div>
  </div>
)

export {CutsSummary, summarizedCuts}
