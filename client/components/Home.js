import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Categories from '../containers/Categories'



  const Home = () => (
    <div>
          <Categories />
    </div>
  )

export default Home
