import React from 'react'
import {CutSummaryRow} from './CutSummaryRow'

const CutsSummary = ({ cuts }) => (
  <div className="cuts-summary">
    <h1>Summary</h1>
    <div>
      <div className="row-header">
        <span className="name">Type</span>
        <span className="weight">Weight</span>
        <span className="percentage">%</span>
      </div>
      {cuts.map(cut =>
        <CutSummaryRow key={cut.id} cut={cut} />
      )}
    </div>
  </div>
)

export {CutsSummary}
