import React from 'react'
import { connect } from 'react-redux'

import LineChart from '../../components/charts/LineChart'

const testdata = [
  { name: 'Mon', Orders: 3400 },
  { name: 'Tue', Visits: 1280, Orders: 2398 },
  { name: 'Wed', Visits: 5000, Orders: 4300 },
  { name: 'Thu', Visits: 0, Orders: 2908 },
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
  // [
  //   {name: "2018-12-22", food: 2, living: 2 },
  //   {name: "2018-12-22", food: 2, living: 2 },
  // ]

  render(){
    const data = this.props.expense.reduce((ac, v) => {
      const obj = ac.find(d => d.name === v.date)
      if (obj) {
        if (!obj[v.type]) {
          obj[v.type] = 0
        }
        obj[v.type] += v.price
      } else {
        ac.push({name: v.date})
      }
      return ac
    }, [])
    console.log(data, 'data')
    const yKey = [
      {keyName: 'food'},
      {keyName: 'living'},
      {keyName: 'transport'},
      {keyName: 'learning'},
      {keyName: 'others'}
    ]
    return(
      <LineChart
        height={400}
        data={data}
        xKey="name"
        yKey={yKey}
      />
    )
  }
}

export default connect(
  state=>({ expense: state.expense }),
  null
)(ExpenseLineChart)
