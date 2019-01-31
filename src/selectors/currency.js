import { createSelector } from 'reselect'


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
