import React from 'react'
import {connect} from 'react-redux'

import {getSpanishFarewells} from '../actions/spanishFarewells'

const renderSpanishFarewell = (spanishFarewell, key) => (
  <h1 key={key}>{spanishFarewell.text}</h1>
)

const spanishFarewells = ({spanishFarewells, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getSpanishFarewells())}>Show Farewells en Espanol</button>
    {spanishFarewells.map(renderSpanishFarewell)}
  </div>
)

const mapStateToProps = (state) => {
return {spanishFarewells: state.spanishFarewells}

}

export default connect(mapStateToProps)(spanishFarewells)
