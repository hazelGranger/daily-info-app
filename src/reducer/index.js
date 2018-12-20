import { combineReducers } from 'redux'

import expense from './expense'
import currency from './currency'

export default combineReducers({
  expense,
  currency,
})
