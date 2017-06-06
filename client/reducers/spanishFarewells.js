function spanishFarewells (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SPANISH_FAREWELLS':
      return [...action.spanishFarewells]
    default:
      return state
  }
}

export default spanishFarewells
