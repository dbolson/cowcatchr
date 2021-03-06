import React from 'react'
import {CutSummaryRow} from './CutSummaryRow'

const summarizedCuts = ({ cuts, cutTypes }) => {
  const weights = cutWeights(cuts, cutTypes)
  const weightTotal = totalWeight(weights)

  return Object.keys(weights).map((key, i) => {
    return {
      id: i + 1,
      name: key,
      weight: weights[key],
      percentage: weightPercent(weights[key], weightTotal),
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

const weightPercent = (weight, total) => {
  const percent = Math.round((weight / total) * 100)

  if (isNaN(percent)) {
    return 0
  } else {
    return percent
  }
}

const CutsSummary = ({ cuts, cutTypes }) => (
  <div className="cuts-summary">
    <h1>Summary</h1>
    <div>
      <div className="row">
        <span className="cut-name">Type</span>
        <span className="cut-weight">Weight</span>
        <span className="cut-percentage">%</span>
      </div>
      {summarizedCuts({ cuts, cutTypes }).map(cut =>
        <CutSummaryRow key={cut.id} cut={cut} />
      )}
    </div>
  </div>
)

export {CutsSummary, summarizedCuts}
