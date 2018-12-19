import Expense from '../models/expense'

async function create(ctx) {
  const newExpense = new Expense(ctx.request.body)
  const saveExpense = await newExpense.save()
  ctx.body = saveExpense
}

async function findAll(ctx) {
  const expenseItems = await Expense.find({})
  ctx.body = expenseItems
}

export default {
  create,
  findAll
}
