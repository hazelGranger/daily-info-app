import axios from 'axios'

// action types
export const GET_7DAYS_RATES_ALLCOUNTRY = 'GET_7DAYS_RATES_ALLCOUNTRY'
export const LOAD_CURRENCY = 'LOAD_CURRENCY'
export const REFRESH_RATES = 'REFRESH_RATES'
export const SET_SHOWING_COUNTRY = 'SET_SHOWING_COUNTRY'
export const SET_SHOWING_BANK = 'SET_SHOWING_BANK'
export const SET_SHOWING_DATE = 'SET_SHOWING_DATE'

const currencyAPI = '/api/currency'

export const loadCurrency = (currencies) => ({
  type: LOAD_CURRENCY, currencies
})

export const get7DaysRatesAllCountry = () => {
  return async (dispatch) => {
    const res = await axios.get(currencyAPI)
    dispatch(loadCurrency(res.data))
  }
}
