import {
  getRatesFromBC,
  createBankofChina
} from './currencyBC'

import Controller from '../../controllers/currency'

const currencySpider = async () => {
  // getRatesFromBC()
  // Create a BC bank structure if there is not
  const BC = await Controller.findBank('BC')
  if (BC.length === 0 ) {
    createBankofChina()
  }
  Controller.addNewCountry('BC', 'AUS')
}

export default currencySpider
