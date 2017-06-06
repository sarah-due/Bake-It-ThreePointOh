import React from 'react'
import {connect} from 'react-redux'

import {getSpanishGreetings} from '../actions/spanishGreetings'

const renderSpanishGreeting = (spanishGreeting, key) => (
  <h1 key={key}>{spanishGreeting.text}</h1>
)

const spanishGreetings = ({spanishGreetings, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getSpanishGreetings())}>Show Greetings en Espanol</button>
    {spanishGreetings.map(renderSpanishGreeting)}
  </div>
)

const mapStateToProps = (state) => {
return {spanishGreetings: state.spanishGreetings}

}

export default connect(mapStateToProps)(spanishGreetings)
