import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import RateCard from './currency/RateCard'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

class Currency extends Component {

  render(){
    const { classes } = this.props
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Buying Rate</Typography>
              <RateCard
                rate={467.09}
                ydaRate={467.02}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Cash Buying Rate</Typography>
              <RateCard
                rate={467.09}
                ydaRate={467.02}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Selling Rate</Typography>
              <RateCard
                rate={467.09}
                ydaRate={467.02}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" gutterBottom>Cash Selling Rate</Typography>
              <RateCard
                rate={467.09}
                ydaRate={467.02}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Currency)
