import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


  const Nav = () => (
    <nav>
      <div className='container-fluid'>
        <ul className='nav navbar-nav'>
          <li className='active'><Link to='#' className='nav-item'>Home</Link></li>
          <li><Link to='#' className='nav-item'>Categories</Link></li>
          <li><Link to='#' className='nav-item'>All Recipes</Link></li>
          <li><Link to='#' className='nav-item'>Add Recipe</Link></li>
        </ul>
      </div>
    </nav>
  )

export default Nav
