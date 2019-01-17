import expense from './expense'
import {
  ADD_EXPENSE_ITEM,
  DELETE_EXPENSE_ITEM,
  LOADED_EXPENSE_ITEM
} from '../actions/expense'

import {
  getMockExpense,
  loadedMockExpense
 } from '../../mocks/reducer/getMockExpense'

describe('Expense Reducer', () => {

  it('should return the initial state', () => {
    expect(expense(undefined, {})).toEqual([])
  })

  it('should load the data', () => {
    expect(expense([], {
      type: LOADED_EXPENSE_ITEM,
      expenseItems: getMockExpense()
    })).toEqual(loadedMockExpense())
  })

})
