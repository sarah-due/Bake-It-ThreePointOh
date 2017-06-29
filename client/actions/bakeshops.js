import request from 'superagent'

export const receiveBakeshops = (bakeshops) => {
  return {
    type: 'RECEIVE_BAKESHOPS',
    bakeshops
  }
}

export function getBakeshops() {
  return (dispatch) => {
    request
      .get(`/api/bakeshops`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveBakeshops(res.body))
      })
  }
}
