import React from 'react'

const CutSummaryRow = ({ cut }) => (
  <div className="row">
    <span className="name">{cut.name}</span>
    <span className="weight">{cut.weight}</span>
    <span className="percentage">{cut.percentage}</span>
  </div>
)

export {CutSummaryRow}
