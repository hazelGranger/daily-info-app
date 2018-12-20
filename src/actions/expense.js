import axios from 'axios'
// action typefaces
export const ADD_EXPENSE_ITEM = 'ADD_EXPENSE_ITEM'
export const DELETE_EXPENSE_ITEM = 'DELETE_EXPENSE_ITEM'
export const LOADED_EXPENSE_ITEM = 'LOADED_TODOS'
export const FETCH_EXPENSE_ITEM = 'FETCH_EXPENSE_ITEM'

// action creators
const addExpenseItem = (expenseItem) => (
  { type: ADD_EXPENSE_ITEM, expenseItem}
)

const deleteExpenseItem = (ids) => (
  { type: DELETE_EXPENSE_ITEM, ids }
)

export const loadedExpenseItem = (expenseItems) => (
  { type: LOADED_EXPENSE_ITEM, expenseItems }
)

export const fetchExpenseItem = () => (
  { type: FETCH_EXPENSE_ITEM }
)

// axios async functions
export const saveExpenseItem = (expenseItem) => {
  return  async (dispatch) => {
    const res = await axios.post('/expense', expenseItem)
    dispatch(addExpenseItem({...expenseItem, id: res.data._id}))
  }
}

export const fetchExpenseItems = () => {
  return async (dispatch) => {
    const res = await axios.get('/expense')
    dispatch(loadedExpenseItem(res.data))
  }
}

export const deleteSelectedItems = (selectedIds) => {
  return async (dispatch) => {
    const res = await axios.post('/expense/delete_selected', selectedIds)
    dispatch(deleteExpenseItem(selectedIds))
  }
}