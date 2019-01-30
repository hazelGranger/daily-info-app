import React from 'react'

import UpIcon from '@material-ui/icons/TrendingUp'
import FlatIcon from '@material-ui/icons/TrendingFlat'
import DownIcon from '@material-ui/icons/TrendingDown'

const variantIcon = {
  up: UpIcon,
  flat: FlatIcon,
  down: DownIcon
}

const TrendIcon = (props) => {
  const { trend, color } = props
  const Icon = variantIcon[trend]
  return(
    <Icon style={{
      color: color ? color :'inherit',
      fontSize: '60px'
    }} />
  )
}

export default TrendIcon
