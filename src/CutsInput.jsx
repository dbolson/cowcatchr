import React from 'react'

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

export {CutsInput}
