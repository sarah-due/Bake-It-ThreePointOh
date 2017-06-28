import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCategories} from '../actions/categories'


const renderCategory = (category, key) => (
    <div className = "col-md-4 category_box">
      <Link to={`/${category.category_id}`}>
        <img className = "cat-image" src={`${category.image_url}`}/>
        <h4 className="cat-header">{category.category_name}</h4>
      </Link>
    </div>
)

const Categories = ({categories, dispatch}) => (

    <div className="row category_list">
      <h4 className="category-list-header">Recipe Categories</h4>
      <div>
        {dispatch(getCategories())}
        {categories.map(renderCategory)}
      </div>
    </div>
)

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(Categories)
