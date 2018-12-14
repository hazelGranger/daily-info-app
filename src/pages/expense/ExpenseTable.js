import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EnhancedTable from '../../components/EnhancedTable'
import { addExpenseItem } from '../../model/expense.js'

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

class ExpenseTable extends Component{
  render(){
    const { expense, handleAddItem, handleDeletItem } = this.props
    return(
      <EnhancedTable
        title='Expense Details'
        model={expenseModel}
        data={expense}
        hasAddItem={true}
        hasFilter={false}
        handleAddItem={handleAddItem}
        handleDeletItem={handleDeletItem}
       />
    )
  }
}

ExpenseTable.propTypes = {
  handleAddItem: PropTypes.func,
  handleDeletItem: PropTypes.func,
}

export default connect(
  state=>state,
  null
)(ExpenseTable)
