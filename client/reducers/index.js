import {combineReducers} from 'redux'

import greetings from './greetings'
import spanishGreetings from './spanishGreetings'

export default combineReducers({
  greetings,
  spanishGreetings
})
