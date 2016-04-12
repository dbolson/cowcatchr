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
