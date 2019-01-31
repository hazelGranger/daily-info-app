// reducer
import {
  LOAD_CURRENCY
} from '../actions/currency'

const initState = {
  bank: 'BC',
  country: 'NZD',
  rates: []
}

const currency = (state=initState, action) => {
  switch (action.type) {
    case 'LOAD_CURRENCY':
      return {...state, rates: action.currencies}
    default:
      return state
  }
}

export default currency
