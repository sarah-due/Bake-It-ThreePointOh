import {combineReducers} from 'redux'

import greetings from './greetings'
import spanishGreetings from './spanishGreetings'
import farewells from './farewells'

export default combineReducers({
  greetings,
  spanishGreetings,
  farewells
})
