import puppeteer from 'puppeteer'
import Controller from '../../controllers/currency'

const chrome = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'

export const getRatesFromBC = async () => {
  try{
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    page.setUserAgent(chrome)
    page.setViewport({width: 1200, height: 1000})

    await page.goto('http://www.boc.cn/sourcedb/whpj/')

    await page.waitForSelector('.publish')
    const tableTrs = await page.$$('#DefaultMain + table tbody tr')

    let currencyContries = ['澳大利亚元', '加拿大元', '欧元', '英镑', '港币', '日元', '新西兰元', '泰国铢', '新台币', '美元']

    const names = await tableTrs.map( async (tr, i) => {
      if (i > 0) {
        const name = await tr.$eval('td', td => td.innerText)
        if (currencyContries.includes(name)) {
          console.log(name);
          let currency = await tr.$$eval('td', tds => tds.map( v => v.innerText))
          console.log(currency, 'currency\n');
          return currency
        }
        return null
      }
    })


    const rnames = names.map(v => {
      v.then((name) => {
        console.log(name, 'rnames');
        return name
      })
    })

    setTimeout(async ()=> {
      console.log(names, 'names 5000');
      await browser.close()
    }, 5000)
  } catch (e) {
    console.log('error: ', e)
  }
}

export const createBankofChina = () => {
  Controller.create({
    bankName: 'BC',
    currencyCountries: [{
      name: 'NZ',
      rates: [
        {
          BR: 455.7,
          SR: 458.9,
          CBR: 441.64,
          CSR: 464.53,
          date: '2019-01-23T03:24:00'
        }
      ]
    }]
  })
}
