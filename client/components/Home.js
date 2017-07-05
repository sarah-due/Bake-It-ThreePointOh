import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Categories from '../containers/Categories'
import BakeOrNot from './BakeOrNot'


  const Home = () => (
    <div>
      <div className="home-banner col-md-12">
          <Link to='/recipes/1'><h3 className="banner-content">RECIPE OF THE WEEK</h3></Link>
      </div>
      <BakeOrNot />
      <hr className= "new-hr"/>
      <Categories />
    </div>
  )

export default Home
