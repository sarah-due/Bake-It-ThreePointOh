function recipes (state = [], action={}) {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      return [...action.recipes]
    case 'ADD_RECIPE':
         return [...state, action.recipe]
    default:
      return state
  }
}

export default recipes
