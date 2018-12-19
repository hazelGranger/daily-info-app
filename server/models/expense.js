import mongoose from 'mogoose'

const ExpenseSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    type: { type: String },
    date: { type: Date, default: Date.now }
  }
)

const Expense = mogoose.model('Expense', ExpenseSchema)

export default mogoose.model('Expense')
