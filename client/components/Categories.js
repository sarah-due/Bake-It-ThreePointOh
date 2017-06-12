import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions'


const Categories = (props) => (

      <div>
        <h1>Show Categories</h1>
        <p>{props.categories}</p>
      </div>

)


const renderCategory = (category, key) => (
  <h1 key={key}>{category.category_name}</h1>
)

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(Categories)
