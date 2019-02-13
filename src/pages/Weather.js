import React from 'react'
import Map from '../components/Map'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { fetchWeatherData } from '../actions/weather'
import { connect } from 'react-redux'
import WeatherIcon from './weather/WeatherIcon'
import windy from '../img/weather/windy.svg'
import flag from '../img/flag_aud.png'

const styles = theme => ({
  mapContainer: {
    position: 'relative',
    height: '82vh'
  }
})

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchWeatherData()
  }

  render(){
    const { classes, weather } = this.props
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} className={classes.mapContainer}>
            <Map
              center={[170, -42]}
              zoom={4.8}
              weatherData={weather}
             />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(
  connect(
    state => ({
      weather: state.weather
    }),
    {
      fetchWeatherData
    }
  )(
    Weather
  )
)
