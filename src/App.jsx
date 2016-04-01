import React from 'react'

const CutsTable = ({ cutTypes }) => (
  <div className="cuts-table">
    <CutsInput cutTypes={cutTypes}/>
    <CutsList />
  </div>
)

const CutsInput = ({ cutTypes }) => (
  <div className="cuts-input">
    <div className="row">
      <select name="cuts_type">
        <option value="0">type</option>
        {cutTypes.map(type =>
          <option key={type.id} value={type.id}>{type.name}</option>
        )}
      </select>
      <input className="cuts-name" type="text" name="name" placeholder="name" />
      <input className="cuts-weight" type="text" name="weight" placeholder="weight" />
      <input className="cuts-save" type="button" value="Save" />
    </div>
  </div>
)

const CutsList = () => (
  <div className="cuts-list">
    <div className="row">
      <span className="type">ground</span>
      <span className="name">ground</span>
      <span className="weight">1.0</span>
      <input type="button" name="delete" value="delete" />
    </div>
    <div className="row">
      <span className="type">steak</span>
      <span className="name">new york strip</span>
      <span className="weight">2.7</span>
      <input type="button" name="delete" value="delete" />
    </div>
    <div className="row">
      <span className="type">steak</span>
      <span className="name">ribeye</span>
      <span className="weight">1.5</span>
      <input type="button" name="delete" value="delete" />
    </div>
  </div>
)

const CutsSummary = () => (
  <div className="cuts-summary">
    <h1>Summary</h1>
    <div>
      <div className="row-header">
        <span className="name">Type</span>
        <span className="weight">Weight</span>
        <span className="percentage">%</span>
      </div>
      <div className="row">
        <span className="name">steaks</span>
        <span className="weight">4.2</span>
        <span className="percentage">81</span>
      </div>
      <div className="row">
        <span className="name">roasts</span>
        <span className="weight">0</span>
        <span className="percentage">0</span>
      </div>
      <div className="row">
        <span className="name">ground</span>
        <span className="weight">1.0</span>
        <span className="percentage">19</span>
      </div>
      <div className="row">
        <span className="name">misc.</span>
        <span className="weight">0</span>
        <span className="percentage">0</span>
      </div>
    </div>
  </div>
)

const App = ({ cutTypes }) => (
  <div className="app">
    <CutsTable cutTypes={cutTypes} />
    <CutsSummary />
  </div>
)

export {App}
