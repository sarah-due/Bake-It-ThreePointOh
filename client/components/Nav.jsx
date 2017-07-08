import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import jump from 'jump.js'


  class Nav extends React.Component {

  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#mainNavBar'> &#9776;﻿</button>
          </div>

          <div className='collapse navbar-collapse' id='mainNavBar'>
            <ul className='nav navbar-nav'>
              <li><Link to='/' className='nav-item'>Home</Link></li>
              <li><Link to='/about' className='nav-item'>About</Link></li>
              <li><Link to='/allrecipes' className='nav-item'>All Recipes</Link></li>
              <li><Link to='/addrecipe' className='nav-item'>Add Recipe</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Nav
