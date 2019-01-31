// reducer
import {
  LOAD_CURRENCY,
  SET_SHOWING_COUNTRY,
  SET_SHOWING_BANK,
} from '../actions/currency'

const initState = {
  bank: 'BC',
  country: 'NZD',
  rates: []
}

const currency = (state=initState, action) => {
  switch (action.type) {
    case LOAD_CURRENCY:
      return { ...state, rates: action.currencies }
    case SET_SHOWING_COUNTRY:
      return { ...state, country: action.country }
    case SET_SHOWING_BANK:
      return { ...state, bank: action.bank }
    default:
      return state
  }
}

export default currency
