import {assert} from 'chai'
import {summarizedCuts} from '../src/CutsSummary'

describe('summarizedCuts', () => {
  it('summarizes the cuts', () => {
    const state = {
      cutTypes: [
        { id: 1, name: 'steak'  },
        { id: 2, name: 'roast'  },
        { id: 3, name: 'ground' },
        { id: 4, name: 'misc'   },
      ],
      cuts: [
        { id: 1, type: 3, name: 'ground',         weight: 1.0 },
        { id: 2, type: 1, name: 'new york strip', weight: 2.7 },
        { id: 3, type: 1, name: 'ribeye',         weight: 1.5 },
        { id: 1, type: 3, name: 'ground',         weight: 1.0 },
      ],
    }

    const expected = [
      { id: 1, name: 'steak',  weight: 4.2, percentage: 68 },
      { id: 2, name: 'roast',  weight: 0,   percentage: 0  },
      { id: 3, name: 'ground', weight: 2.0, percentage: 32 },
      { id: 4, name: 'misc',   weight: 0,   percentage: 0  },
    ]
    const result = summarizedCuts(state)

    assert.deepEqual(expected, result)
  })
})
