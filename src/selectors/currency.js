import { createSelector } from 'reselect'

import { getYMD } from '../utils/timeFormat'

const getRates = state => state.currency.rates

const getShowingBank = state => state.currency.bank

const getShowingCountry = state => state.currency.country

export const getLast2DaysRates = createSelector(
  [getRates, getShowingBank, getShowingCountry],
  (rates, bank, country) => {
    const bankExist = rates.find(v => v.bankName === bank)
    if (bankExist) {
      const countryExist = bankExist['currencyCountries'].find(v => v.name === country)
      if (countryExist) {
        const length = countryExist['rates'].length
        return {
          today: countryExist['rates'][length-1],
          yda: countryExist['rates'][length-2]
        }
      }
    }
  }
)

export const getLast7DayRatesForLineChart = createSelector(
  [getRates, getShowingBank, getShowingCountry],
  (rates, bank, country) => {
    const bankExist = rates.find(v => v.bankName === bank)
    if (bankExist) {
      const countryExist = bankExist['currencyCountries'].find(v => v.name === country)
      if (countryExist) {
        return countryExist['rates'].map(v => ({
          Average_Value: ((v.BR + v.CBR + v.SR + v.CSR) / (
            (v.BR?1:0) + (v.CBR?1:0) + (v.SR?1:0) + (v.CSR?1:0))).toFixed(2),
          name: getYMD(new Date(v.date))
        }))
      }
    }
  }
)

export const getAllCountries = createSelector(
  [getRates, getShowingBank],
  (rates, bank) => {
    const bankExist = rates.find(v => v.bankName === bank)
    if (bankExist) {
      const countries = bankExist['currencyCountries'].map(v => v.name)
      return countries
    }
  }
)
