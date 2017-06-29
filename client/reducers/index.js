import {combineReducers} from 'redux'

import categories from './categories'
import recipes from './recipes'
import bakeshops from './bakeshops'

export default combineReducers({
  categories,
  recipes,
  bakeshops
})
