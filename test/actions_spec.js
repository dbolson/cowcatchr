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

describe.only('normalize cuts', () => {
  it('flattens data from server', () => {
    const cuts = [
      { id: 1, name: 'cut1' },
      { id: 2, name: 'cut2' },
    ]

    const expected = {
      cuts: {
        1: { id: 1, name: 'cut1' },
        2: { id: 2, name: 'cut2' },
      }
    }
    const result = actions.normalizeCuts(cuts)

    assert.deepEqual(result, expected)
  })
})
