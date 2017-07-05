import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getRecipes} from '../actions/recipes'
import {getCategories} from '../actions/categories'


const renderRecipe = (recipe, key) => (
    <div className = "col-md-4 recipe-list-box" key={key}>
        <Link to={`/recipes/${recipe.recipe_id}`}>
          <img className = "recipe-list-image" src={`${recipe.recipe_image_url}`}/>
          <h4 className="recipe-list-title">{recipe.recipe_name}</h4>
        </Link>
    </div>
)

class RecipesByCat extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(getRecipes())
    this.props.dispatch(getCategories())
  }

    render () {
      const {recipes} = this.props
      let catID = this.props.match.params.category_id

      let categoryName = this.props.categories.filter(category => {
          return category.category_id == catID
          }).map((item, key) => {
          return item.category_name })


      console.log(categoryName);

      return (
        <div className="row category_list">
          <div>
            <h4 className="recipe-list-header">{categoryName}</h4>
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
  return {recipes: state.recipes, categories: state.categories}
}

export default connect(mapStateToProps)(RecipesByCat)
