export function startOrder() {
}

export function finishOrder() {
}

export function addCut(cut) {
  return {
    type: 'ADD_CUT',
    cut,
  }
}

export function deleteCut(id) {
  return {
    type: 'DELETE_CUT',
    id,
  }
}

export function requestCuts() {
  return {
    type: 'REQUEST_CUTS'
  }
}

export function fetchCuts() {
  return function (dispatch) {
    dispatch(requestCuts())

    return fetch('//localhost:3000/cuts')
      .then(response => response.json())
      .then(response => dispatch(receiveCuts(response.cuts)))
  }
}

export function receiveCuts(cuts) {
  return {
    type: 'RECEIVE_CUTS',
    cuts
  }
}
