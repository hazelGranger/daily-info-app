// reducer
// createData
let id = 0

function createData(item, price, date, type){
  id += 1
  return {id, item, price, date, type}
}
// createData end

const initalState = [
  createData('KFC', 25, '2018-12-11', 'food'),
  createData('Bus card top-up', 30, '2018-11-11', 'transpotation'),
  createData('Rent', 340, '2018-12-1', 'living'),
  createData('Fruit', 10, '2018-12-3', 'food'),
  createData('Rent', 10, '2018-12-13', 'living'),
  createData('Drink', 5, '2018-12-12', 'food'),
  createData('Vegetable', 10, '2018-11-20', 'food'),
  createData('Sheet', 10, '2018-11-10', 'living'),
  createData('Books', 10, '2018-11-11', 'learning'),
]

// actions
let ADD_EXPENSE_ITEM = 'ADD_EXPENSE_ITEM'
let DELETE_EXPENSE_ITEM = 'DELETE_EXPENSE_ITEM'

export const addExpenseItem = (item) => ({
  type: ADD_EXPENSE_ITEM, payload: { ...item, id: ++id, date: '2018-12-12'}
})

export const deleteExpenseItem = (items) => ({
  type: DELETE_EXPENSE_ITEM, payload: items
})

const expense = (state=initalState, action) => {
  switch (action.type) {
    case ADD_EXPENSE_ITEM:
      return [...state, action.payload]
    case DELETE_EXPENSE_ITEM:
      return state.filter(v=>!action.payload.includes(v.id))
    default:
      return state
  }
}

export default expense
