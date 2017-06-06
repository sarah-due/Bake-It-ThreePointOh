function spanishGreetings (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SPANISH_GREETINGS':
      return [...action.spanishGreetings]
    default:
      return state
  }
}

export default spanishGreetings
