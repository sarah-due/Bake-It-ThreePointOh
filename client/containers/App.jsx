import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Nav from '../components/Nav'
import Home from '../components/Home'
import RecipesByCat from './RecipesByCat'
import SingleRecipe from './SingleRecipe'
import RandomBakeshop from './RandomBakeshop'

const App = () => {
  return (
    <Router>
      <div className = "main-body">
        <h1 className="title-header"><Link to='/'>get baking</Link></h1>
        <Nav />
        <Route exact path="/" component={Home} />
        <div className="container">
           <Route exact path="/:category_id" component={RecipesByCat} />
           <Route exact path ="/recipes/:recipe_id" component={SingleRecipe} />
           <Route exact path="/bakeshoprandomizer/:bakeshop_id" component={RandomBakeshop} />
        </div>
        <hr/>
        <h5 className ="footer"> Copyright &copy; Dueweke Codes 2017 </h5>
      </div>
    </Router>
  )
}

export default App
