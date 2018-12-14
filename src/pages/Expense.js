import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import ExpenseTable from './expense/ExpenseTable'
import ExpenseAddForm from './expense/ExpenseAddForm'
import { addExpenseItem, deleteExpenseItem } from '../model/expense'

class Expense extends Component {
  state = {
    modalOpen: false
  }

  handleAddItem = () => {
    this.setState({ modalOpen: true })
  }

  handleSubmit = item =>{
    this.props.addExpenseItem(item)
  }

  handleDeletItem = items => {
    this.props.deleteExpenseItem(items)
  }

  render(){
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper>
              <ExpenseTable
                handleAddItem={this.handleAddItem}
                handleDeletItem={this.handleDeletItem}
               />
              <ExpenseAddForm
                modalOpen={this.state.modalOpen}
                handleSubmit={this.handleSubmit}
               />
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper>
              line chart
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper>
              pie chart
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(
  null,
  {
    addExpenseItem,
    deleteExpenseItem,
  }
)(Expense)
