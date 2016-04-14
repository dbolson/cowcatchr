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

const deletedCuts = (id, cuts) => {
  let updatedCuts = {}

  Object.keys(cuts).forEach((cut) => {
    const cutId = parseInt(cut)
    if (cutId !== id) {
      updatedCuts[cutId] = cuts[cut]
    }
  })

  return Object.assign({}, updatedCuts)
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
      return Object.assign({}, state, {
        cuts: deletedCuts(action.id, state.cuts)
      })
    case 'RECEIVE_CUTS':
      return Object.assign({}, state, {
        cuts: action.cuts
      })
    default:
      return state
  }
}
