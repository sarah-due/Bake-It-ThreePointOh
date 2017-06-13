import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions'
import BakeOrNot from '../components/BakeOrNot'


const renderCategory = (category, key) => (
    <div className = "col-md-4 category_box">
        <img className = "cat-image" src={`${category.image_url}`}/>
        <h4 className="cat-header">{category.category_name}</h4>
    </div>
)

const Categories = ({categories, dispatch}) => (

    <div className="row category_list">
        <div className="home-banner col-md-12">
            <h3 className="banner-content">RECIPE OF THE WEEK</h3>
        </div>
        <BakeOrNot />
        <hr className= "new-hr"/>
        <div>
          <h4 className="category-list-header">Recipe Categories</h4>
        </div>
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
