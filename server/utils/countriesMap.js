
export const countryNamesMap = new Map([
  ['AUD', '澳大利亚元'],
  ['CAD', '加拿大元'],
  ['EUR', '欧元'],
  ['GBP', '英镑'],
  ['HKD', '港币'],
  ['Yen', '日元'],
  ['NZD', '新西兰元'],
  ['THB', '泰国铢'],
  ['TWD', '新台币'],
  ['USD', '美元']
])

export const currencyContries =  [...countryNamesMap.values()]

export const getAbbrByCHName = ( chname ) => {
  return [...countryNamesMap.entries()].find(v => v[1] === chname)[0]
}
