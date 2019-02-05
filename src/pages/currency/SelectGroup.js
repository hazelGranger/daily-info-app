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

import AudFlag from '../../img/flag_aud.png'
import CadFlag from '../../img/flag_cad.png'
import EurFlag from '../../img/flag_eur.png'
import GbpFlag from '../../img/flag_gbp.png'
import HkdFlag from '../../img/flag_hkd.png'
import NzdFlag from '../../img/flag_nzd.png'
import PrcFlag from '../../img/flag_prc.png'
import ThbFlag from '../../img/flag_nzd.png'
import TwdFlag from '../../img/flag_twd.png'
import UsdFlag from '../../img/flag_usd.png'
import YenFlag from '../../img/flag_yen.png'

const flagsOfCountries = {
  AUD: AudFlag,
  CAD: CadFlag,
  EUR: EurFlag,
  GBP: GbpFlag,
  HKD: HkdFlag,
  NZD: NzdFlag,
  PRC: PrcFlag,
  THB: ThbFlag,
  TWD: TwdFlag,
  USD: UsdFlag,
  Yen: YenFlag
}


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
  flags: {
    width: 32,
    marginRight: 16
  },
  flagContainer: {
    display: 'flex',
    alignItems: 'center'
  }
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
                <MenuItem value="BC">
                  <div className={classes.flagContainer}>
                    <img className={classes.flags} src={flagsOfCountries['PRC']} alt="BC"/>
                    <span>BC</span>
                  </div>
                </MenuItem>
                <MenuItem value="ICBC">
                  <div className={classes.flagContainer}>
                    <img className={classes.flags} src={flagsOfCountries['PRC']} alt="ICBC"/>
                    <span>ICBC</span>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="country">Currency Region</InputLabel>
              <Select
                value={this.state.country}
                onChange={this.handleChange}
                name="country"
                id="country"
              >
                {
                  countries ? (
                    countries.map( v=> (
                      <MenuItem key={v} value={v} >
                        <div className={classes.flagContainer}>
                          <img className={classes.flags} src={flagsOfCountries[v]} alt={v}/>
                          <span>{v}</span>
                        </div>
                      </MenuItem>
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
