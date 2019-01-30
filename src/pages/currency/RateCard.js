import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withTheme, withStyles } from '@material-ui/core/styles'

import TrendIcon from './TrendIcon'

const styles = (theme) => ({
  trendWrap: {
    marginTop: '-16px',
    paddingLeft: '32px'
  }
})

class RateCard extends React.Component {
  render() {
    const { theme, classes, rate, ydaRate } = this.props
    const changeNum = (rate - ydaRate).toFixed(2)
    const changeSign = changeNum < 0 ? '-' : '+'
    const color = changeNum < 0 ? theme.palette.error.main : theme.palette.success.main
    const trend = ((changeNum) => {
      if (changeNum == 0) {
        return 'flat'
      }
      if (changeNum > 0) {
        return 'up'
      } else {
        return 'down'
      }
    })(changeNum)

    return(
      <div>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>{rate}</Typography>
            <Typography variant="subtitle1">YDA: {ydaRate}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.trendWrap}>
            <TrendIcon trend={trend} color={color} />
            <Typography variant="subtitle1" style={{color: color}}>{changeSign} {Math.abs(changeNum)}</Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)
(
  withTheme()
  (RateCard)
)
