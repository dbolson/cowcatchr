import {assert} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import {createRenderer} from 'react-addons-test-utils'
import * as ShallowTestUtils from 'react-shallow-testutils'
import {Cut} from '../../src/components/Cut'

describe('Cut', () => {
  it('renders props', () => {
    const cut = {
      id: 1,
      type: 1,
      name: 'my cut',
      weight: 2.0,
    }
    const renderer = createRenderer()

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
