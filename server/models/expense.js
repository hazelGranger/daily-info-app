import mongoose from 'mongoose'

const ExpenseSchema = new mongoose.Schema(
  {
    item: { type: String },
    price: { type: Number },
    type: { type: String },
    date: { type: Date, default: Date.now }
  }
)

const Expense = mongoose.model('Expense', ExpenseSchema)

export default mongoose.model('Expense')
