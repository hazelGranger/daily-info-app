import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: WarningIcon
}

const styles = theme => ({
  close: {
    padding: theme.spacing.uinit / 2,
  },
  notification: {
    position: 'relative',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    marginRight: theme.spacing.unit
  },
  success: {
    color: theme.palette.success.light
  },
  warning: {
    color: theme.palette.warning.light
  },
  error: {
    color: theme.palette.error.main
  },
  info: {
    color: theme.palette.secondary.light
  },
})

class Notification extends React.Component {

  queue = []

  state = {
    open: true,
    messageInfo: {}
  }

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open: true
      })
    }
  }

  showNotification = message => () => {
    this.queue.push({
      message,
      key: new Date().getTime()
    })

    if (this.state.open) {
      this.setState({ open: false })
    } else {
      this.processQueue()
    }
  }

  handleClose = (event, reason) => {
    if (reason==="clickaway") {
      return
    }
    this.setState({ open: false })
  }

  handleExited = () => {
    this.processQueue()
  }

  render() {
    const { classes, variant, message } = this.props
    const Icon = variantIcon[variant]
    return(
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.state.open}
          autoHideDurations={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
        >
          <SnackbarContent
            aria-describedby="message-id"
            message={
              <span id="message-id" className={classes.message}>
                <Icon className={classNames(classes.icon, classes.iconVariant, classes[variant])} />
                {message}
              </span>
            }
            action={<IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>}
          />
        </Snackbar>
    )
  }
}

export default withStyles(styles)(Notification)
