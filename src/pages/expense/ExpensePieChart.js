import React from 'react'
import { connect } from 'react-redux'

import PieChart from '../../components/charts/PieChart'
import ExpenseTypeIcon from './ExpenseTypeIcon'
import { getVisibleExpense } from '../../selectors/expense'

class ExpensePieChart extends React.Component {

  renderTypeIcon = (type, color) => {
    return (
      <ExpenseTypeIcon type={type} color={color} />
    )
  }

  render(){
    const data = this.props.expense.reduce((ac, v) => {
      let obj = ac.find( group => group.name === v.type)
      if (!obj) {
        obj = {name: v.type}
        ac.push(obj)
      }
      if (!obj.value) {
        obj.value = 0
      }
      obj.value += v.price
      return ac
    }, [])

    return(
      <PieChart
        data={data}
        width={420}
        height={400}
        renderIcon={this.renderTypeIcon}
      />
    )
  }
}

export default connect(
  state=>({ expense: getVisibleExpense(state) }),
  null
)(ExpensePieChart)
