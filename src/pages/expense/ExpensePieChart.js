import React from 'react'
import { connect } from 'react-redux'

import PieChart from '../../components/charts/PieChart'

class ExpensePieChart extends React.Component {
  render(){
    return(
      <PieChart />
    )
  }
}

export default connect(
  state=>({ expense: state.expense }),
  null
)(ExpensePieChart)
