import {
  ADD_EXPENSE_ITEM,
  DELETE_EXPENSE_ITEM,
  LOADED_EXPENSE_ITEM,
  FETCH_EXPENSE_ITEM
} from '../actions/expense'

const initalState = []

// reducer
const expense = (state=initalState, action) => {
  switch (action.type) {
    case ADD_EXPENSE_ITEM:
      return [...state, action.expenseItem]
    case LOADED_EXPENSE_ITEM:
      return action.expenseItems.map(v => {
        const {_id, date: date, ...item } = v
        const createdDate = new Date(date)
        return {...item, id: _id, date: `${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`}
      })
    case DELETE_EXPENSE_ITEM:
      return state.filter(v=>!action.ids.includes(v.id))
    default:
      return state
  }
}

export default expense
