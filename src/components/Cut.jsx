import React from 'react'

const Cut = ({ cut }) => (
  <div className="row" key={cut.id}>
    <span className="cut-type">{cut.type}</span>
    <span className="cut-name">{cut.name}</span>
    <span className="cut-weight">{cut.weight}</span>
    <input type="button" name="delete" value="delete" />
  </div>
)

export {Cut}
