import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import MuiModal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[8],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
  },
});

class Modal extends Component {
  state ={
    open: this.props.open
  }

  handleOpen = () =>{
    this.setState({ open: true })
  }

  handleClose = () =>{
    console.log(123);
    this.setState({ open: false })
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open})
    }
  }

  render(){
    const { classes, title, children, open } = this.props
    console.log(open, this.state.open);
    return(
      <MuiModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <div className={classes.modalHeader}>
              { title }
              <Button onClick={this.handleClose}>Close Modal</Button>
            </div>
            <div className={classes.modalBody}>
              { children }
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
