import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import ExpenseTable from './expense/ExpenseTable'

class Expense extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper>
              <ExpenseTable />
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
