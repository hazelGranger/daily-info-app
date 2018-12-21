import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  close: {
    padding: theme.spacing.uinit / 2,
  },
  notification: {
    position: 'relative'
  }
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
    const { classes } = this.props
    return(
        <Snackbar
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">lalal</span>}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.state.open}
          autoHideDurations={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
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
    )
  }
}

export default withStyles(styles)(Notification)
