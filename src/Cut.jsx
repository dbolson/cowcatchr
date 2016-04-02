import React from 'react'

const Cut = ({ cut }) => (
  <div className="row" key={cut.id}>
    <span className="type">{cut.type}</span>
    <span className="name">{cut.name}</span>
    <span className="weight">{cut.weight}</span>
    <input type="button" name="delete" value="delete" />
  </div>
)

export {Cut}
