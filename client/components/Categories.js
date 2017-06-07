import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions'

const renderCategory = (category, key) => (
  <h1 key={key}>{category.category_name}</h1>
)

const Categories = ({categories, dispatch}) => (
  <div>
    <h1>test</h1>
    <button onClick={() => dispatch(getCategories())}>Show Categories</button>
    {categories.map(renderCategory)}
  </div>
)

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(Categories)
