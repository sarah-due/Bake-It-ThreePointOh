import React from 'react'
import {connect} from 'react-redux'

import {getRecipes} from '../actions/recipes'


const renderSingleRecipe = (recipe, key) => (
    <div className = "single-recipe-box">
        <img className = "single-recipe-image" src={`${recipe.recipe_image_url}`}/>
        <h2 className="single-recipe-header">{recipe.recipe_name}</h2>
        <p className="single-recipe-info">Chef: {recipe.chef_name}</p>
        <p className="single-recipe-details">Ingredients: <br/>{recipe.recipe_ingredients}</p>
        <p className="single-recipe-details">Directions: <br/>{recipe.recipe_method}</p>
        <p className="single-recipe-comments">{recipe.recipe_comments}</p>
    </div>
)

class SingleRecipe extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(getRecipes())
  }
    render () {
      let recipeID = this.props.match.params.recipe_id
      return (
          <div>
            {this.props.recipes.filter(recipe => {
                return recipe.recipe_id == recipeID
                }).map((item, key) => {
                return renderSingleRecipe(item, key)
                }
              )}
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {recipes: state.recipes}
}

export default connect(mapStateToProps)(SingleRecipe)
