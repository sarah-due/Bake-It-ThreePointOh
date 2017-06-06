import request from 'superagent'

export const receiveSpanishFarewells = (spanishFarewells) => {
  return {
    type: 'RECEIVE_SPANISH_FAREWELLS',
    spanishFarewells
  }
}

export function getSpanishFarewells () {
  return (dispatch) => {
    request
    .get(`/api/greetings/spanishFarewells`)
    .end((err, res) => {
      if (err) {
        console.log(err.message)
        return
      }
      dispatch(receiveSpanishFarewells(res.body))
    })
  }
}
