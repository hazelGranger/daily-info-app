import {
  crawlRatesFromBC,
  initBC,
  isCrawled,
  requiredInit
} from './currencyBC'

import Controller from '../../controllers/currency'
import { getYMD, countryNamesMap } from '../../utils/timeFormat'

const currencySpider = async () => {

  //Create a BC bank structure if there is not
  //const BC = await Controller.findBank('BC')
  // Controller.deleteBankByName('BC')
  const isRequiredInit = await requiredInit()

  if (isRequiredInit) {
    await initBC()
    await crawlRatesFromBC()
  } else {

    const isCrawledToday = await isCrawled()
    if (!isCrawledToday) {
      await crawlRatesFromBC()
    }
  }

}

export default currencySpider
