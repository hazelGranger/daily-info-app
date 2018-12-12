import React, { Component } from 'react'
import { connect } from 'react-redux'

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
  }
]

// let id = 0
//
// function createData(item, price, date, type){
//   id += 1
//   return {id, item, price, date, type}
// }
//
// const data = [
//   createData('KFC', 25, '2018-12-11', 'food'),
//   createData('Bus card top-up', 30, '2018-11-11', 'transpotation'),
//   createData('Rent', 340, '2018-12-1', 'living'),
//   createData('Fruit', 10, '2018-12-3', 'food')
// ]

class ExpenseTable extends Component{
  render(){
    console.log(this.props.expense, 'ex');
    return(
      <EnhancedTable
        title='Expense Details'
        model={expenseModel}
        data={this.props.expense}
       />
    )
  }
}

export default connect(
  state=>state,
  null
)(ExpenseTable)
