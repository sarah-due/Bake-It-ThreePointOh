import {combineReducers} from 'redux'

import greetings from './greetings'
import spanishGreetings from './spanishGreetings'
import farewells from './farewells'
import spanishFarewells from './spanishFarewells'

export default combineReducers({
  greetings,
  spanishGreetings,
  farewells,
  spanishFarewells
})
