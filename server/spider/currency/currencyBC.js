import puppeteer from 'puppeteer'
import Controller from '../../controllers/currency'
import { getAbbrByCHName, currencyContries, countryNamesMap } from '../../utils/countriesMap'
import { getYMD } from '../../utils/timeFormat'

const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
const BANK_NAME = 'BC'

export const crawlRatesFromBC = async () => {
  try{
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    page.setUserAgent(CHROME)
    page.setViewport({width: 1200, height: 1000})

    await page.goto('http://www.boc.cn/sourcedb/whpj/')

    await page.waitForSelector('.publish')
    const tableTrs = await page.$$('#DefaultMain + table tbody tr')

    // resolve dom from the page, get array of Promises, they resolve, will get the rates data
    const names = await tableTrs.map( async (tr, i) => {
      if (i > 0) {
        const name = await tr.$eval('td', td => td.innerText)
        if (currencyContries.includes(name)) {
          let currency = await tr.$$eval('td', tds => tds.map( v => v.innerText))
          return currency
        }
        return null
      }
    })

    // resolve Promises, and save them in mongodb
    const rates = await names.map( v => {
      v.then(async (rate) => {
        // country -> rate[0]
        let country = getAbbrByCHName(rate[0])
        let hasCountry = await Controller.findCountryByName(BANK_NAME, country)
        let rateObj = {
          BR: rate[1],
          SR: rate[3],
          CBR: rate[2],
          CSR: rate[4]
        }
        await Controller.addRateForCountryByDate(BANK_NAME, country, rateObj)
      })
    })

    setTimeout(async ()=> {
      await browser.close()
    }, 5000)

  } catch (e) {
    console.log('error: ', e)
  }
}

export const initBC = () => {
  Controller.initBank(BANK_NAME, countryNamesMap)
}

export const isCrawled = async () => {
  const rates = await Controller.findACountryCurrencyByDate( 'BC', 'NZD', getYMD(new Date(Date.now())) )
  return rates.length > 0 ? false : true
}

export const requiredInit = async () => {
  const BC = await Controller.findBank('BC')
  return BC.length===0 ? true : false
}
