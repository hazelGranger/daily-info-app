import React from 'react'
import { connect } from 'react-redux'

import LineChart from '../../components/charts/LineChart'
import { getVisibleExpense, getLineChartExpense } from '../../selectors/expense'
import { getLastDays } from '../../utils/timeFormat'

const ExpenseLineChart = (props) => {
  const yKey = [
    {keyName: 'food'},
    {keyName: 'living'},
    {keyName: 'transportation'},
    {keyName: 'learning'},
    {keyName: 'others'},
    {keyName: 'sum'}
  ]
  return(
    <LineChart
      height={400}
      data={props.expense}
      xKey="name"
      yKey={yKey}
    />
  )
}

export default connect(
  state=>({ expense: getLineChartExpense(state) }),
  null
)(ExpenseLineChart)
