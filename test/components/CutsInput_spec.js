import {assert} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import {createRenderer, Simulate} from 'react-addons-test-utils'
import * as ShallowTestUtils from 'react-shallow-testutils'
import {CutsInput} from '../../src/components/CutsInput'

describe('CutsInput', () => {
  it('renders the select options for cut types', () => {
    const cutTypes = [
      { id: 1, name: 'type1' },
      { id: 2, name: 'type2' },
    ]
    const renderer = createRenderer()

    renderer.render(
      <CutsInput cutTypes={cutTypes} />
    )
    const output = renderer.getRenderOutput()
    const options = ShallowTestUtils.findWithType(output, 'select').props.children

    assert.equal(options[0].props.children, 'type')
    cutTypes.forEach((cutType, i) => {
      assert.equal(options[1][i].props.children, cutType.name)
    })
  })

  //it('calls callback on valid form submit', () => {
  //})

  //it('clears the inputs on valid form submit', () => {
  //})

  it('requires a cut type to submit', () => {
    const cutTypes = [
      { id: 1, name: 'type1' },
      { id: 2, name: 'type2' },
    ]
    const renderer = createRenderer()
    const onSave = () => {
      console.log('onSave called')
    }

    renderer.render(
      <CutsInput
      cutTypes={cutTypes}
      onSave={onSave}
      />
    )
    const output = renderer.getRenderOutput()
    const form = ShallowTestUtils.findWithType(output, 'form')

    Simulate.submit(form)
  })

  //it('requires a cut name to submit', () => {
  //})

  //it('requires a cut weight to submit', () => {
  //})

  //it('requires a valid cut weight to submit', () => {
  //})

  //it('does not call callback with invalid data', () => {
  //})
})
