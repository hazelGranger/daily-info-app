import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EnhancedTable from '../../components/EnhancedTable'
import { fetchExpenseItems } from '../../actions/expense'
import { getVisibleExpense } from '../../selectors/expense'
import { setTimeForExpense } from '../../actions/time'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import TimeIcon from '@material-ui/icons/AccessTime'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  timeIcon: {
    color: theme.palette.secondary.main
  }
})

const expenseModel = [
  {
    id: 'item',
    numeric: false,
    disablePadding: false,
    label: 'Item'
  },{
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price'
  },{
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date'
  },{
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Type'
  }
]

class ExpenseTable extends Component{

  state = {
    anchorEl: null
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = (daysNum) => {
    this.setState({anchorEl: null})
    this.props.setTimeForExpense({
      name: 'SHOW_LAST_DAYS',
      num: daysNum
    })
  }

  componentDidMount (){
    this.props.fetchExpenseItems()
  }

  render(){
    const { expense, handleAddItem, handleDeletItem, classes } = this.props
    const { anchorEl } = this.state
    return(
      <EnhancedTable
        title='Expense Details'
        model={expenseModel}
        data={expense}
        hasAddItem={true}
        hasFilter={false}
        handleAddItem={handleAddItem}
        handleDeletItem={handleDeletItem}
        handleSetTime={
          <div>
            <Tooltip title="Select a time range">
              <IconButton
                aria-label="Select a time range"
                className={classes.timeIcon}
                aria-owns={anchorEl ? 'time range menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <TimeIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClick}
              >
              <MenuItem onClick={()=>this.handleClose(7)}>Last 7 Days</MenuItem>
              <MenuItem onClick={()=>this.handleClose(30)}>Last Month</MenuItem>
              <MenuItem onClick={()=>this.handleClose(90)}>Last Season</MenuItem>
            </Menu>
        </div>}
       />
    )
  }
}

ExpenseTable.propTypes = {
  handleAddItem: PropTypes.func,
  handleDeletItem: PropTypes.func,
}

export default withStyles(styles)(
  connect(
    state => ({ expense: getVisibleExpense(state) }),
    {
      fetchExpenseItems,
      setTimeForExpense
    }
  )(ExpenseTable))
