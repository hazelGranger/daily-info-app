import Currency from '../models/currency'

async function create(currency) {
  const currencyRate = new Currency(currency)
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

async function deleteByID(id) {
  const removedCurrencyRates = await Currency.remove({_id: id})
  return removedCurrencyRates
}

async function addNewCountry(bank, country) {
  const rate = await Currency.findOne({bankName: bank})
  rate.currencyCountries.push({
    name: country,
    rates: []
  })
  rate.save()
}

export default {
  create,
  findAll,
  findBank,
  deleteByID,
  addNewCountry
}
