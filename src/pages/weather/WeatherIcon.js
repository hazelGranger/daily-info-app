import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import windy from '../../img/weather/windy.png'

const styles = (theme) => ({
  weatherIcon: {
    width: theme.components.weatherIcon.width
  }
})

const weatherIconMap = {
  // drizzle: drizzle,
  windy: windy,
}


const WeatherIcon = (props) => {
  const { classes, weather } = props
  return(
    <img src={weatherIconMap[weather]} alt="drizzle" />
  )
}

export default withStyles(styles)(WeatherIcon)
