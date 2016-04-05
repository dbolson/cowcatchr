const initialState = {
  cutTypes: {
    1: { id: 1, name: 'steak' },
    2: { id: 2, name: 'roast' },
    3: { id: 3, name: 'ground' },
    4: { id: 4, name: 'misc' },
  },
  cuts: {}
}

const addedCuts = (cut, cuts) => {
  const newCutId = Object.keys(cuts).length + 1

  return Object.assign({}, cuts, {
    [newCutId]: {
      id: newCutId,
      type: cut.type,
      name: cut.name,
      weight: cut.weight,
    }
  })
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'START_ORDER':
      return initialState
    case 'FINISH_ORDER':
      return state
    case 'ADD_CUT':
      return Object.assign({}, state, {
        cuts: addedCuts(action.cut, state.cuts)
      })
    case 'DELETE_CUT':
      return state
    default:
      return state
  }
}
