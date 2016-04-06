import {assert} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
//import {
  //renderIntoDocument,
  //scryRenderedDOMComponentsWithTag
//} from 'react-addons-test-utils'
import TestUtils from 'react-addons-test-utils'
import * as ShallowTestUtils from 'react-shallow-testutils'

//import {Cut} from '../../src/components/Cut'
const Cut = ({ cut }) => (
  <div className="row" key={cut.id}>
    <span className="cut-type">{cut.type}</span>
    <span className="cut-name">{cut.name}</span>
    <span className="cut-weight">{cut.weight}</span>
    <input type="button" name="delete" value="Delete" />
  </div>
)

describe('Cut', () => {
  it('renders', () => {
    const cut = {
      id: 1,
      type: 1,
      name: 'my cut',
      weight: 2.0,
    }
    const renderer = TestUtils.createRenderer()

    renderer.render(
      <Cut cut={cut} />
    )
    const output = renderer.getRenderOutput()

    assert.equal(ShallowTestUtils.findAllWithType(output, 'span').length, 3)
    assert.equal(
      ShallowTestUtils.findWithClass(output, 'cut-type').props.children,
      cut.type
    )
    assert.equal(
      ShallowTestUtils.findWithClass(output, 'cut-name').props.children,
      cut.name
    )
    assert.equal(
      ShallowTestUtils.findWithClass(output, 'cut-weight').props.children,
      cut.weight
    )
  })
})
