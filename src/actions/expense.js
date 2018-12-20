// action typefaces
export const ADD_EXPENSE_ITEM = 'ADD_EXPENSE_ITEM'
export const DELETE_EXPENSE_ITEM = 'DELETE_EXPENSE_ITEM'
export const LOADED_EXPENSE_ITEM = 'LOADED_TODOS'
export const FETCH_EXPENSE_ITEM = 'FETCH_EXPENSE_ITEM'

// action creators
export const addExpenseItem = (expenseItem) => (
  { type: ADD_EXPENSE_ITEM, expenseItem}
)

export const deleteExpenseItem = (ids) => (
  { type: DELETE_EXPENSE_ITEM, ids }
)

export const loadExpenseItem = (expenseItems) => (
  { type: LOADED_EXPENSE_ITEM, expenseItems }
)

export const fetchExpenseItem = () => (
  { type: FETCH_EXPENSE_ITEM }
)
