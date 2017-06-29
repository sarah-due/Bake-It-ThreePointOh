import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getRecipes} from '../actions/recipes'


const renderRecipe = (recipe, key) => (
    <div className = "col-md-4 recipe-box">
        <Link to={`/recipes/${recipe.recipe_id}`}>
          <img className = "recipe-list-image" src={`${recipe.recipe_image_url}`}/>
          <h4 className="recipe-list-header">{recipe.recipe_name}</h4>
        </Link>
    </div>
)

class RecipesByCat extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(getRecipes())
  }
    render () {
      const {recipes} = this.props
      let catID = this.props.match.params.category_id
      return (
        <div className="row category_list">
          <div>
            <h4 className="recipe-list-header">Recipes</h4>
          </div>
          <div>
            {this.props.recipes.filter(recipe => {
                return recipe.category_id == catID
                }).map((item, key) => {
                return renderRecipe(item, key)
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

export default connect(mapStateToProps)(RecipesByCat)
