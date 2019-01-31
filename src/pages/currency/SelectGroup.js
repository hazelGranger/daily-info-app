import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { setShowingCountry, setShowingBank } from '../../actions/currency'
import { getAllCountries } from '../../selectors/currency'

const styles = theme => ({
  selectGroup: {
    marginBottom: 16,
  },
  paper: {
    paddingLeft: 8,
    paddingRight: 16,
    paddingBottom: 8
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    minWidth: 120,
  },
})

class SelectGroup extends React.Component{
  state = {
    bank: 'BC',
    country: 'NZD'
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    if (event.target.name === 'country') {
      this.props.setShowingCountry(event.target.value)
    }
    if (event.target.name === 'bank') {
      //this.props.setShowingBank(event.target.value)
    }
  }
  render(){
    const { classes, countries } = this.props
    return(
      <Grid container spacing={24} className={classes.selectGroup}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="bank">Bank</InputLabel>
              <Select
                value={this.state.bank}
                onChange={this.handleChange}
                name="bank"
                id="bank"
              >
                <MenuItem value="BC">BC</MenuItem>
                <MenuItem value="ICBC">ICBC</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="country">Country</InputLabel>
              <Select
                value={this.state.country}
                onChange={this.handleChange}
                name="country"
                id="country"
              >
                {
                  countries ? (
                    countries.map( v=> (
                      <MenuItem key={v} value={v} >{v}</MenuItem>
                    ))
                  ) : null
                }
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(
  connect(
    state => ({
      bank: state.currency.bank,
      country: state.currency.country,
      countries: getAllCountries(state)
    }),
    {
      setShowingCountry,
      setShowingBank
    }
  )(SelectGroup)
)
