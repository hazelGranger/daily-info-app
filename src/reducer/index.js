import { combineReducers } from 'redux'

import expense from './expense'
import currency from './currency'
import notification from './notification'
import time from './time'
import weather from './weather'

export default combineReducers({
  expense,
  currency,
  notification,
  time,
  weather,
})
