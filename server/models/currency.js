import mongoose from 'mongoose'

const CurrencySchema = new mongoose.Schema({
  bankName: { type: String },
  currencyCountries: [{
    name: String,
    rates: [
      {
        BR: Number, // Buying Rate
        SR: Number, // Selling Rate
        CBR: Number, // Cash Buying Rate
        CSR: Number, // Cash Selling Rate
        date: Date
      }
    ]
  }]
})

const Currency = mongoose.model('Currency', CurrencySchema)

export default Currency
