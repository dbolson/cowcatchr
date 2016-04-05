import {assert} from 'chai'
import * as actions from '../src/actions'

describe('actions', () => {
  it('creates an action to add a cut ', () => {
    const cut = {
      type: 1,
      name: 'new cut',
      weight: 1,
    }

    const expected = {
      type: 'ADD_CUT',
      cut
    }
    const result = actions.addCut(cut)

    assert.deepEqual(result, expected)
  })
})
