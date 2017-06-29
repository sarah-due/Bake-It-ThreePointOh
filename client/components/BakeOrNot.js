import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getRecipes} from '../actions/recipes'
import {getBakeshops} from '../actions/bakeshops'

class BakeOrNot extends React.Component {

  componentDidMount () {
    this.props.dispatch(getRecipes())
    this.props.dispatch(getBakeshops())
  }

  render() {
    let randomRecipe = (Math.floor(Math.random() * this.props.recipes.length) + 1)
    let randomBakeshop = (Math.floor(Math.random() * this.props.bakeshops.length) + 3301)
    return (
      <div className="row bake-or-not">
        <div className="col-md-5 to-bake">
          <Link to={`/recipes/${randomRecipe}`}>
            <h3> I can't decide! </h3>
            <h4>Choose a recipe for me.</h4>
          </Link>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5 not-to-bake">
          <Link to={`/bakeshoprandomizer/${randomBakeshop}`}>
            <h3>I didn't come here to bake.</h3>
            <h4><span>I came here to </span><span className="underline">EAT.</span></h4>
          </Link>
        </div>
      </div>
)}
}


const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    bakeshops: state.bakeshops
  }
}

export default connect(mapStateToProps)(BakeOrNot)
