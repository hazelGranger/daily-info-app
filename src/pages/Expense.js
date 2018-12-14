import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import ExpenseTable from './expense/ExpenseTable'
import ExpenseAddForm from './expense/ExpenseAddForm'

class Expense extends Component {
  state = {
    modalOpen: false
  }

  handleAddItem = () => {
    this.setState({ modalOpen: true })
  }

  render(){
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper>
              <ExpenseTable handleAddItem={this.handleAddItem}/>
              <ExpenseAddForm modalOpen={this.state.modalOpen}/>
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

export default Expense
