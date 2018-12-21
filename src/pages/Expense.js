import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import ExpenseTable from './expense/ExpenseTable'
import ExpenseAddForm from './expense/ExpenseAddForm'
import { saveExpenseItem, deleteSelectedItems } from '../actions/expense'
import { showNotification, closeNotification } from '../actions/notification'

class Expense extends Component {
  state = {
    modalOpen: false,
    messages: {
      addSuccess: 'Adding Expense item succeed!',
      addError: 'Adding Expense item failed!',
      deleteSuccess: (num)=>`Deleting ${num} items succeed!`,
      deleteError: 'Deleting items failed!',
    }
  }

  handleAddItem = () => {
    this.setState({ modalOpen: true })
  }

  handleSubmit = item =>{
      // Promise Object ---> this.props.saveExpenseItem(item), get value by use .then()
      this.props.saveExpenseItem(item).then( () => {
        this.props.showNotification({
          type: 'success',
          content: this.state.messages.addSuccess
        })
      }, error => {
        this.props.showNotification({
          type: 'error',
          content: this.state.messages.addError
        })
      })
  }

  handleDeletItem = items => {
    // Promise Object
    this.props.deleteSelectedItems(items).then( data => {
      this.props.showNotification({
        type: 'success',
        content: this.state.messages.deleteSuccess(data.n)
      })
    }, error => {
      this.props.showNotification({
        type: 'error',
        content: this.state.messages.deleteError
      })
    })
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
    saveExpenseItem,
    deleteSelectedItems,
    showNotification,
    closeNotification,
  }
)(Expense)
