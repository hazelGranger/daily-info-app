import Currency from '../models/currency'
import { getYMD } from '../utils/timeFormat'

async function create(bankName) {
  const currencyRate = new Currency({
    bankName: bankName,
    currencyCountries: []
  })
  const saveCurrency = await currencyRate.save()
  return saveCurrency
}

async function findAll(ctx) {
  const currencyRates = await Currency.find({})
  ctx.body = currencyRates
}

async function findBank(bankName) {
  const currencyRates = await Currency.find({bankName: bankName})
  return currencyRates
}

async function deleteBankByID(id) {
  const removed= await Currency.deleteOne({_id: id})
  return removed
}

async function deleteBankByName(name) {
  const removed = await Currency.deleteMany({bankName: name})
  return removed
}

async function addNewCountry(bank, country) {
  const thisBank = await Currency.findOne({bankName: bank})
  thisBank.currencyCountries.push({
    name: country,
    rates: []
  })
  const savedBank = await thisBank.save()
  return savedBank
}

async function findCountryByName(bank, country) {
  const thisBank = await Currency.findOne({bankName: bank})
  const countryName =  thisBank.currencyCountries.find(v => v.name === country)
  return countryName
}

async function deleteCountryByName(bank, country) {
  const thisBank = await Currency.updateOne({bankName: bank}, {
    $pull: { "currencyCountries": {"name": country}}
  })
  return thisBank
}

async function addRateForCountryByDate(bank, country, rate) {
  const thisBank = await Currency.findOne({bankName: bank})
  thisBank.currencyCountries.find(v => v.name === country ).rates.push(rate)
  const saved = thisBank.save()
  return saved
}

async function findACountryCurrencyByDate(bank, country, date) {
  const thisBank = await Currency.findOne({bankName: bank})
  const thisDateRate =  thisBank.currencyCountries.find(v => v.name === country).rates.find(
    r => {
      return getYMD(new Date(r.date)) === date
    }
  )
  return thisDateRate
}

async function  initBank(bank, countryNamesMap) {
  const newBank = await create(bank)
  if (newBank) {
    const countries = [...countryNamesMap.keys()].map(async v => {
      await addNewCountry(bank, v)
    })
  }
}

export default {
  initBank,
  create,
  findAll,
  findBank,
  deleteBankByID,
  deleteBankByName,
  addNewCountry,
  findCountryByName,
  addRateForCountryByDate,
  deleteCountryByName,
  findACountryCurrencyByDate,
}
