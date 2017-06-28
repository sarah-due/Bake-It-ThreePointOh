import React from 'react'
import {connect} from 'react-redux'

import {getRecipes} from '../actions/recipes'


const renderSingleRecipe = (recipe, key) => (
    <div className = "col-md-4 recipe-box">
        <h4 className="single-recipe-header">{recipe.recipe_name}</h4>
        <img className = "single-recipe-image" src={`${recipe.recipe_image_url}`}/>
        <p className="single-recipe-byline">{recipe.chef_name}</p>
        <p className="single-recipe-byline">{recipe.recipe_ingredients}</p>
        <p className="single-recipe-byline">{recipe.recipe_method}</p>
        <p className="single-recipe-byline">{recipe.recipe_comments}</p>
    </div>
)

class SingleRecipe extends React.Component {

  componentDidMount () {
    this.props.dispatch(getRecipes())
  }
    render () {
      const {recipes} = this.props
      let recipeID = this.props.match.params.recipe_id
      return (
        <div className='container'>
          <div>
            {this.props.recipes.filter(recipe => {
                return recipe.recipe_id == recipeID
                }).map((item, key) => {
                return renderSingleRecipe(item, key)
                }
              )}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {recipes: state.recipes}
}

export default connect(mapStateToProps)(SingleRecipe)
