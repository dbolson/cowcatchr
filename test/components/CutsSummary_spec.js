import {assert} from 'chai'
import {summarizedCuts} from '../../src/components/CutsSummary'

describe('summarizedCuts', () => {
  const cutTypes = [
    { id: 1, name: 'steak'  },
    { id: 2, name: 'roast'  },
    { id: 3, name: 'ground' },
    { id: 4, name: 'misc'   },
  ]

  it('summarizes the cuts', () => {
    const state = {
      cutTypes: cutTypes,
      cuts: [
        { id: 1, type: 'ground', name: 'ground',         weight: 1.0 },
        { id: 2, type: 'steak',  name: 'new york strip', weight: 2.7 },
        { id: 3, type: 'steak',  name: 'ribeye',         weight: 1.5 },
        { id: 1, type: 'ground', name: 'ground',         weight: 1.0 },
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

  it('shows 0 percent when there are no cuts', () => {
    const state = {
      cutTypes: cutTypes,
      cuts: [],
    }
    const expected = [
      { id: 1, name: 'steak',  weight: 0, percentage: 0 },
      { id: 2, name: 'roast',  weight: 0, percentage: 0 },
      { id: 3, name: 'ground', weight: 0, percentage: 0 },
      { id: 4, name: 'misc',   weight: 0, percentage: 0 },
    ]
    const result = summarizedCuts(state)

    assert.deepEqual(expected, result)
  })
})
