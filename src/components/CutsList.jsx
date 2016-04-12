import React from 'react'
import {Cut} from './Cut'

const CutsList = ({ cuts, onDelete }) => (
  <div className="cuts-list">
    {cuts.map(cut =>
      <Cut key={cut.id} cut={cut} onDelete={onDelete} />
    )}
  </div>
)

export {CutsList}
