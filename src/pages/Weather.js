import React from 'react'
import Map from '../components/Map'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  mapContainer: {
    position: 'relative',
    height: '82vh'
  }
})

class Weather extends React.Component {
  render(){
    const { classes } = this.props
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} className={classes.mapContainer}>
            <Map
              center={[170, -42]}
              zoom={4.5}
             />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Weather)
