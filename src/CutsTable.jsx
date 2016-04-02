import React from 'react'
import {CutsInput} from './CutsInput'
import {CutsList} from './CutsList'

const CutsTable = ({ cutTypes, cuts, onSave }) => (
  <div className="cuts-table">
    <CutsInput cutTypes={cutTypes} onSave={onSave}/>
    <CutsList cuts={cuts} />
  </div>
)

export {CutsTable}
