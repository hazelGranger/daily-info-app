import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { get7DaysRatesAllCountry } from '../actions/currency'
import { getLast2DaysRates } from '../selectors/currency'

import RateCard from './currency/RateCard'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

class Currency extends Component {

  componentDidMount() {
    this.props.get7DaysRatesAllCountry()
  }

  render(){
    const { classes, last2DaysRates } = this.props
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Buying Rate</Typography>
              <RateCard
                rate={last2DaysRates ? last2DaysRates['today']['BR'] : 0}
                ydaRate={last2DaysRates ? last2DaysRates['yda']['BR'] : 0}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Cash Buying Rate</Typography>
              <RateCard
                rate={last2DaysRates ? last2DaysRates['today']['CBR'] : 0}
                ydaRate={last2DaysRates ? last2DaysRates['yda']['CBR'] : 0}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Selling Rate</Typography>
              <RateCard
                rate={last2DaysRates ? last2DaysRates['today']['SR'] : 0}
                ydaRate={last2DaysRates ? last2DaysRates['yda']['SR'] : 0}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Cash Selling Rate</Typography>
              <RateCard
                rate={last2DaysRates ? last2DaysRates['today']['CSR'] : 0}
                ydaRate={last2DaysRates ? last2DaysRates['yda']['CSR'] : 0}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(
  connect(
    state => ({
      currency: state.currency,
      last2DaysRates: getLast2DaysRates(state)
    }),
    {
      get7DaysRatesAllCountry
    }
  )(
    Currency
  )
)
