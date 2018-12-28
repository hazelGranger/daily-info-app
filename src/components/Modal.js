import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import MuiModal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[8],
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
  },
  modalHeader: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.components.modal.headerPadding,
    position: 'relative',
  },
  modalTitle: {
    color: theme.palette.primary.contrastText,
  },
  modolCloseIcon: {
    position: 'absolute',
    right: theme.components.modal.headerPadding,
    top: theme.spacing.unit,
    color: theme.palette.primary.contrastText,
  },
  modalFooter: {
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 4,
    textAlign: 'right',
  }
});

class Modal extends Component {
  state ={
    open: this.props.open
  }

  handleOpen = () =>{
    this.setState({ open: true })
  }

  handleClose = () =>{
    this.setState({ open: false })
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open})
    }
  }

  render(){
    const { classes, title, children, footer } = this.props
    return(
      <MuiModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <div className={classes.modalHeader}>
              <Typography
                className={classes.modalTitle}
                variant="h6"
                gutterBottom
              >
                { title }
              </Typography>
              <Tooltip title="Close Modal">
                <IconButton
                  aria-label="Close Modal"
                  onClick={this.handleClose}
                  className={classes.modolCloseIcon}
                >
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes.modalBody}>
              { children }
            </div>
            <div className={classes.modalFooter}>
              { footer }
            </div>
          </div>
      </MuiModal>
    )
  }
}

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Modal)
