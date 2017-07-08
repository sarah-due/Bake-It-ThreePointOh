import request from 'superagent'

export const receiveRecipes = (recipes) => {
  return {
    type: 'RECEIVE_RECIPES',
    recipes
  }
}

export function getRecipes() {
  return (dispatch) => {
    request
      .get(`/api/recipes`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveRecipes(res.body))
      })
  }
}

export const addNewRecipe = (recipe) => {
  return {
    type: 'ADD_RECIPE',
    org
  }
}

export function addRecipe (recipe, callback) {
  request
    .post(`/api/recipes`)
    .send(recipe)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      callback()
    })
}
