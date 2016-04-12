import {assert} from 'chai'
import reducer from '../src/reducer'

describe('reducer', () => {
  it('handles ADD_CUT', () => {
    const expected = {
      1: {
        id: 1,
        type: 1,
        name: 'ribeye',
        weight: 1,
      }
    }
    const result = reducer(undefined, {
      type: 'ADD_CUT',
      cut: {
        type: 1,
        name: 'ribeye',
        weight: 1,
      }
    }).cuts

    assert.deepEqual(result, expected)
  })

  it('handles DELETE_CUT', () => {
    const state = {
      cuts: {
        1: { id: 1, type: 1, name: 'ribeye', weight: 1 },
        2: { id: 2, type: 1, name: 'skirt',  weight: 1 }
      }
    }
    const expected = {
      2: { id: 2, type: 1, name: 'skirt',  weight: 1 }
    }
    const result = reducer(state, {
      type: 'DELETE_CUT',
      id: 1,
    }).cuts

    assert.deepEqual(result, expected)
  })
})
