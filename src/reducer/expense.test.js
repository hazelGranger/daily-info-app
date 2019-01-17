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


  it('should add the expense item', () => {
    expect(expense([{
      item: 'fruit',
      price: 4,
      type: 'food',
      id: '5c1d5041cf258131db8ec1f6',
      date: '2019-01-03'
    }], {
      type: ADD_EXPENSE_ITEM,
      expenseItem: {
        item: 'bus',
        price: 5,
        type: 'food',
        id: '5c1d5041cf258131db8ec1de',
        date: '2019-01-13'
      }
    })).toEqual([
      {
        item: 'fruit',
        price: 4,
        type: 'food',
        id: '5c1d5041cf258131db8ec1f6',
        date: '2019-01-03'
      },
      {
        item: 'bus',
        price: 5,
        type: 'food',
        id: '5c1d5041cf258131db8ec1de',
        date: '2019-01-13'
      }
    ])
  })


  it('should delete the expense item', () => {
    expect(expense([
      {
        item: 'fruit',
        price: 4,
        type: 'food',
        id: '5c1d5041cf258131db8ec1f6',
        date: '2019-01-03'
      }, {
        item: 'bus',
        price: 5,
        type: 'food',
        id: '5c1d5041cf258131db8ec1de',
        date: '2019-01-13'
      }, {
        item: 'rent',
        price: 160,
        type: 'living',
        id: '5c1d5041cf258131db8ec1ae',
        date: '2019-01-15'
      }, {
        item: 'milk',
        price: 4,
        type: 'food',
        id: '5c1d5041cf258131db8ec1ps',
        date: '2019-01-17'
      }
    ], {
      type: DELETE_EXPENSE_ITEM,
      ids: [
        '5c1d5041cf258131db8ec1de',
        '5c1d5041cf258131db8ec1ps'
      ]
    })).toEqual([
      {
        item: 'fruit',
        price: 4,
        type: 'food',
        id: '5c1d5041cf258131db8ec1f6',
        date: '2019-01-03'
      }, {
        item: 'rent',
        price: 160,
        type: 'living',
        id: '5c1d5041cf258131db8ec1ae',
        date: '2019-01-15'
      }
    ])
  })


  it('should return current/default State', () => {
    expect(expense([
      {
        item: 'fruit',
        price: 4,
        type: 'food',
        id: '5c1d5041cf258131db8ec1f6',
        date: '2019-01-03'
      }, {
        item: 'rent',
        price: 160,
        type: 'living',
        id: '5c1d5041cf258131db8ec1ae',
        date: '2019-01-15'
      }
    ], {
      type: 'default'
    })).toEqual([
      {
        item: 'fruit',
        price: 4,
        type: 'food',
        id: '5c1d5041cf258131db8ec1f6',
        date: '2019-01-03'
      }, {
        item: 'rent',
        price: 160,
        type: 'living',
        id: '5c1d5041cf258131db8ec1ae',
        date: '2019-01-15'
      }
    ])
  })

})
