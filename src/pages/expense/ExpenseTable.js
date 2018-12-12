import React, { Component } from 'react'

import EnhancedTable from '../../components/EnhancedTable'

const expenseModel = [
  {
    id: 'item',
    numeric: false,
    disablePadding: false,
    label: 'Item'
  },{
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price'
  },{
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date'
  },{
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Type'
  },{
    id: 'operations',
    numeric: false,
    disablePadding: false,
    label: ''
  }
]

let id = 0

function createData(item, price, date, type){
  id += 1
  return {id, item, price, date, type}
}

const data = [
  createData('KFC', 25, '2018-12-11', 'food'),
  createData('Bus card top-up', 30, '2018-11-11', 'transpotation'),
  createData('Rent', 340, '2018-12-1', 'living'),
  createData('Fruit', 10, '2018-12-3', 'food')
]

class ExpenseTable extends Component{
  render(){
    return(
      <EnhancedTable
        title='Expense Details'
        model={expenseModel}
        data={data}
       />
    )
  }
}

export default ExpenseTable
