import React from 'react'
import { connect } from 'react-redux'

import LineChart from '../../components/charts/LineChart'

import { getLast7DayRatesForLineChart } from '../../selectors/currency'

const CurrencyLineChart = (props) => {
  const yKey = [
    {keyName: 'Average_Value'}
  ]
  return(
    <LineChart
      height={400}
      data={props.currency}
      xKey="name"
      yKey={yKey}
    />
  )
}

export default connect(
  state => ({ currency: getLast7DayRatesForLineChart(state)}),
  null
)(CurrencyLineChart)
