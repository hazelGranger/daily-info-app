import {
  crawlRatesFromBC,
  initBC
} from './currencyBC'

import Controller from '../../controllers/currency'
import { getYMD, countryNamesMap } from '../../utils/timeFormat'

const currencySpider = async () => {

  //Create a BC bank structure if there is not
  const BC = await Controller.findBank('BC')

  //Controller.deleteBankByName('BC')

  if (BC.length === 0 ) {
    await initBC()
    await crawlRatesFromBC()
  } else {
    const rates = await Controller.findACountryCurrencyByDate( 'BC', 'NZD', getYMD(new Date(Date.now())) )
    if (!rates) {
      console.log('my');
      await crawlRatesFromBC()
    }
    console.log(rates);
  }

  //Controller.deleteBankByID('5c4a7a0170291500174e3872')



  //

  // Add a country for a bank
  //Controller.addNewCountry('BC', 'AUS')

  // Add rates for a country by date
  // Controller.addRateForCountryByDate('BC', 'NZ', {
  //   BR: 455.7,
  //   SR: 458.9,
  //   CBR: 441.64,
  //   CSR: 464.53,
  //   date: "2019-01-23"
  // })

  // Remove a country
  // Controller.deleteCountryByName('BC', 'AUS')

}

export default currencySpider
