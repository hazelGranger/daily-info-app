import {
  ADD_EXPENSE_ITEM,
  DELETE_EXPENSE_ITEM,
  LOADED_EXPENSE_ITEM
} from '../actions/expense'

import { getYMD } from '../utils/timeFormat'

const initalState = []

// reducer
const expense = (state=initalState, action) => {
  switch (action.type) {
    case ADD_EXPENSE_ITEM:
      return [...state, action.expenseItem]
    case LOADED_EXPENSE_ITEM:
      return action.expenseItems.map( v => {
        const {date, _id, ...item} = v
        return {...item, id: _id, date: getYMD(new Date(date))}
      })
    case DELETE_EXPENSE_ITEM:
      return state.filter(v=>!action.ids.includes(v.id))
    default:
      return state
  }
}

export default expense
