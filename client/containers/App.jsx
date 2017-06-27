import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from '../components/Home'
import RecipesByCat from './RecipesByCat'

const App = () => {
  return (
    <Router>
      <div className = "main-body">
        <h1 className="title-header"><Link to='/'>get baking</Link></h1>

        <div className="container">
           <Route exact path="/" component={Home} />
           <Route exact path="/:category_name" component={RecipesByCat} />
        </div>
        <hr/>
        <h5 className ="footer"> Copyright &copy; Dueweke Codes 2017 </h5>
      </div>
    </Router>
  )
}

export default App
