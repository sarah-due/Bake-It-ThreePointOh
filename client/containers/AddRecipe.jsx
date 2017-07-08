import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {addRecipe} from '../actions/recipes'
import {getCategories} from '../actions/categories'

class AddRecipe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dispatch: props.dispatch,
      submitted: false,
      message: '',
      recipe: {}
    }
  }

  handleChange (e) {
    let recipe = this.state.recipe
    recipe[e.target.name] = e.target.value
    this.setState({recipe})
    console.log(this.state.recipe);
  }

  handleSubmit (e) {
    e.preventDefault()
    addRecipe(this.state.recipe, this.submitted.bind(this))
  }

  submitted ()  {
    this.setState({submitted: true, message: 'Thank you for sharing your recipe!'})
  }
  refreshForm () {
    this.setState({submitted: false, message: ''})
  }

  renderMessage () {
    return <div className='recipe-submit-box'>
      <Link to={`/allrecipes`}><h4 className="submit-message">{this.state.message}</h4></Link>
      <button className='new-recipe-button' onClick={(e) => this.refreshForm()}>Add a New Recipe</button>
    </div>
  }

  renderForm () {
    return (
      <div>
        <h2 className='recipe-form-header'>Fill out the form below to add your recipe:</h2>
        <form className='recipe-form' onSubmit={(e) => this.handleSubmit(e)}>
          <label className="labelone" htmlFor="name"> Choose a category for your recipe:</label>
            <select className="drop-menu" id="category_id" name="category_id" value="category_id" onChange={(e =>this.handleChange(e))}>
              {this.props.categories.map((category, key) => {
                return <option value={category.category_id}>{category.category_name}</option> })}
             </select>
          <label className="labelone" htmlFor="name"> Recipe Name: </label>
            <input type='text' id='recipe_name' name='recipe_name' onChange={(e) => this.handleChange(e)} />
          <label className="labelone" htmlFor="name"> Chef's Name: </label>
            <input type='text' id='chef_name' name='chef_name' onChange={(e) => this.handleChange(e)} />
          <label className="labelone" htmlFor="name"> Recipe Image URL: </label>
            <input type='text' id='recipe_image_url' name='recipe_image_url' onChange={(e) => this.handleChange(e)} />
          <label className="labelone" htmlFor="name"> Recipe Ingredients: </label>
            <textarea type='text' id='recipe_ingredients' name='recipe_ingredients' onChange={(e) => this.handleChange(e)} />
          <label className="labelone" htmlFor="name"> Recipe Method: </label>
            <textarea type="text" id="recipe_method" name='recipe_method' onChange={(e) => this.handleChange(e)} />
          <label className="labelone" htmlFor="name"> Chef's Comments: </label>
            <textarea type="text" id="recipe_comments" name='recipe_comments' onChange={(e) => this.handleChange(e)} />
          <div className="add-recipe-button">
            <button className="btn" type='submit' id='submit' value='Submit Your Recipe'>Submit Your Recipe</button>
          </div>
        </form>
      </div>
    )
  }
  render () {
    return (
      <div>
        <div className='container form'>
          {this.state.submitted ? this.renderMessage() : this.renderForm() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(AddRecipe)
