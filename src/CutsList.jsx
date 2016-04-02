import React from 'react'
import {Cut} from './Cut'

const CutsList = ({ cuts }) => (
  <div className="cuts-list">
    {cuts.map(cut =>
      <Cut key={cut.id} cut={cut} />
    )}
  </div>
)

export {CutsList}
