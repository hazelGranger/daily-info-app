import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Field, reduxForm, formValueSelector } from 'redux-form'
// import { TextField } from 'redux-form-material-ui'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'
import FoodIcon from '@material-ui/icons/Fastfood'
import HouseIcon from '@material-ui/icons/Home'
import BusIcon from '@material-ui/icons/DirectionsBus'
import LearningIcon from '@material-ui/icons/LibraryBooks'


import Modal from '../../components/Modal'

const styles = theme => ({
  formContainer: {
    padding: theme.components.modal.contentPadding,
  },
  group: {
    flexDirection: 'row',
  },
  groupLabel: {
    marginTop: theme.spacing.unit * 2,
  },
  radioLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  radioLabelActive: {
    color: theme.palette.primary.main,
  },
  radioIcon: {
    marginBottom: theme.spacing.unit,
  }
})

class ExpenseAddForm extends Component{
  state = {
    type: 'food'
  }

  handleChange = event => {
    this.setState({ type: event.target.value })
  }

  render(){
    const { classes } = this.props
    return(
      <Modal
        title="Add An Expense Item"
        open={true/**this.props.modalOpen**/}
      >
      <div className={classes.formContainer}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="itemName"
              name="itemName"
              label="Item Name"
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="number"
              id="price"
              name="price"
              label="Price"
            />
          </Grid>
          <Grid item xs={12} >
            <FormLabel component="legend" className={classes.groupLabel}>Choose a Type for the Item</FormLabel>
            <RadioGroup
              aria-label="Type"
              name="type"
              className={classes.group}
              value={this.state.type}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="food"
                control={<Radio color="primary" />}
                label={<Typography className={classNames(classes.radioLabel,
                  this.state.type==='food' && classes.radioLabelActive)}>
                  <FoodIcon className={classes.radioIcon} />Food</Typography>}
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="living"
                control={<Radio color="primary" />}
                label={<Typography className={classNames(classes.radioLabel,
                  this.state.type==='living' && classes.radioLabelActive)}>
                  <HouseIcon className={classes.radioIcon} />Living</Typography>}
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="transportation"
                control={<Radio color="primary" />}
                label={<Typography className={classNames(classes.radioLabel,
                  this.state.type==='transportation' && classes.radioLabelActive)}>
                  <BusIcon className={classes.radioIcon} />Transport</Typography>}
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="learning"
                control={<Radio color="primary" />}
                label={<Typography className={classNames(classes.radioLabel,
                  this.state.type==='learning' && classes.radioLabelActive)}>
                  <LearningIcon className={classes.radioIcon} />Learning</Typography>}
                labelPlacement="bottom"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(ExpenseAddForm)
