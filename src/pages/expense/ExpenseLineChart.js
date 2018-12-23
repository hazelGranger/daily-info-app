import React from 'react'
import { connect } from 'react-redux'

import LineChart from '../../components/charts/LineChart'

const testdata = [
  { name: 'Mon', Visits: 2200, Orders: 3400 },
  { name: 'Tue', Visits: 1280, Orders: 2398 },
  { name: 'Wed', Visits: 5000, Orders: 4300 },
  { name: 'Thu', Visits: 4780, Orders: 2908 },
  { name: 'Fri', Visits: 5890, Orders: 4800 },
  { name: 'Sat', Visits: 4390, Orders: 3800 },
  { name: 'Sun', Visits: 4490, Orders: 4300 },
]

class ExpenseLineChart extends React.Component {

  // {
  //   "2018-12-21": {
  //     food: 100,
  //     living: 100,
  //     others: 100
  //   },
  //   "2018-12-22": {
  //     food: 100,
  //     living: 100,
  //     others: 100
  //   },
  // }


  render(){
    // const data = this.props.expense.reduce((ac, v) => {
    //   ac[v.date][v.type] = (ac[v.date][v.type] ? ac[v.date][v.type] : 0) + v.price
    // }, {})
    // console.log(data)
    return(
      <LineChart
        height={400}
        data={testdata}
        xKey="name"
        yKey={[{keyName: 'Visits'}, {keyName: 'Orders'}]}
      />
    )
  }
}

export default connect(
  state=>state,
  null
)(ExpenseLineChart)
