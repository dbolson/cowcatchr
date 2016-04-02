import React from 'react'
import ReactDOM from 'react-dom'

const CutsTable = ({ cutTypes, cuts, onSave }) => (
  <div className="cuts-table">
    <CutsInput cutTypes={cutTypes} onSave={onSave}/>
    <CutsList cuts={cuts} />
  </div>
)

const CutsInput = React.createClass({
  handleOnSubmit: function (e) {
    e.preventDefault()

    const formData = {
      type: this.refs.type.value,
      name: this.refs.name.value,
      weight: this.refs.weight.value
    }

    this.clearForm()
    this.props.onSave(formData)
  },

  clearForm: function () {
    this.refs.type.value = 0
    this.refs.name.value = null
    this.refs.weight.value = null
  },

  render: function () {
    return (
      <div className="cuts-input">
        <div className="row">
          <form onSubmit={this.handleOnSubmit}>
            <select name="cuts_type" ref="type">
              <option value="0">type</option>
              {this.props.cutTypes.map(type =>
                <option key={type.id} value={type.id}>{type.name}</option>
              )}
            </select>
            <input className="cuts-name" ref="name" type="text" name="name" placeholder="name" />
            <input className="cuts-weight" ref="weight" type="text" name="weight" placeholder="weight" />
            <input className="cuts-save" type="submit" value="Save" />
          </form>
        </div>
      </div>
    )
  }
})

const CutsList = ({ cuts }) => (
  <div className="cuts-list">
    {cuts.map(cut =>
      <Cut key={cut.id} cut={cut} />
    )}
  </div>
)

const Cut = ({ cut }) => (
  <div className="row" key={cut.id}>
    <span className="type">{cut.type}</span>
    <span className="name">{cut.name}</span>
    <span className="weight">{cut.weight}</span>
    <input type="button" name="delete" value="delete" />
  </div>
)

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

const CutSummaryRow = ({ cut }) => (
  <div className="row">
    <span className="name">{cut.name}</span>
    <span className="weight">{cut.weight}</span>
    <span className="percentage">{cut.percentage}</span>
  </div>
)

const App = ({ cutTypes, cuts, summarizedCuts, onSave }) => (
  <div className="app">
    <CutsTable cutTypes={cutTypes} cuts={cuts} onSave={onSave} />
    <CutsSummary cuts={summarizedCuts} />
  </div>
)

export {App}
