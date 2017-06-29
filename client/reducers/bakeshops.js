function bakeshops (state = [], action={}) {
  switch (action.type) {
    case 'RECEIVE_BAKESHOPS':
      return [...action.bakeshops]
    default:
      return state
  }
}

export default bakeshops
