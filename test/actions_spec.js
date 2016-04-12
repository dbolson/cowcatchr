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

  it('creates an action to delete a cut ', () => {
    const expected = {
      type: 'DELETE_CUT',
      id: 1,
    }
    const result = actions.deleteCut(1)

    assert.deepEqual(result, expected)
  })
})
