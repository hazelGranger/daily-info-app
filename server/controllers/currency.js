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

export default {
  create,
  findAll
}
