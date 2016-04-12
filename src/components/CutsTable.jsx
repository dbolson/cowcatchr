import React from 'react'
import {CutsInput} from './CutsInput'
import {CutsList} from './CutsList'

const CutsTable = ({ cutTypes, cuts, onSave, onDelete }) => (
  <div className="cuts-table">
    <CutsInput cutTypes={cutTypes} onSave={onSave} />
    <CutsList cuts={cuts} onDelete={onDelete} />
  </div>
)

export {CutsTable}
