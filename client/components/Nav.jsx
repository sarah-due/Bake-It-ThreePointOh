import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


  const Nav = () => (
    <nav className="navbar navbar-inverse">
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#mainNavBar'> &#9776;﻿</button>
        </div>

        <div className='collapse navbar-collapse' id='mainNavBar'>
          <ul className='nav navbar-nav'>
            <li><Link to='#' className='nav-item'>Home</Link></li>
            <li><Link to='#' className='nav-item'>Categories</Link></li>
            <li><Link to='#' className='nav-item'>All Recipes</Link></li>
            <li><Link to='#' className='nav-item'>Add Recipe</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )


export default Nav
