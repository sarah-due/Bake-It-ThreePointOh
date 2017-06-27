import React from 'react'
import {connect} from 'react-redux'

import {getRecipes} from '../actions/recipes'


const renderRecipe = (recipe, key) => (
    <div className = "col-md-4 recipe-box">
        <img className = "recipe-list-image" src={`${recipe.image_url}`}/>
        <h4 className="recipe-list-header">{recipe.recipe_name}</h4>
    </div>
)

const RecipesByCat = ({recipes, dispatch}) => (

    <div className="row category_list">

        <div>
          <h4 className="recipe-list-header">Recipes</h4>
        </div>
        <div>
          {dispatch(getRecipes())}
          {recipes.map(renderRecipe)}
        </div>
      </div>
)

const mapStateToProps = (state) => {
  return {recipes: state.recipes}
}

export default connect(mapStateToProps)(RecipesByCat)
