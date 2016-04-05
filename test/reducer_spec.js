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
})
