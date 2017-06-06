import request from 'superagent'

export const receiveSpanishGreetings = (spanishGreetings) => {
  return {
    type: 'RECEIVE_SPANISH_GREETINGS',
    spanishGreetings
  }
}

export function getSpanishGreetings () {
  return (dispatch) => {
    request
      .get(`/api/greetings/spanish`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveSpanishGreetings(res.body))
      })
  }
}
