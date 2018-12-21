import { combineReducers } from 'redux'

import expense from './expense'
import currency from './currency'
import notification from './notification'

export default combineReducers({
  expense,
  currency,
  notification,
})
