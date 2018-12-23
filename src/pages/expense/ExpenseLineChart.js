import React from 'react'
import { connect } from 'react-redux'

import LineChart from '../../components/charts/LineChart'

class ExpenseLineChart extends React.Component {

  render(){

    const data = this.props.expense.reduce((ac, v) => {
      const obj = ac.find(d => d.name === v.date)
      if (obj) {

        if (!obj[v.type]) {
          obj[v.type] = 0
        }
        obj[v.type] += v.price

        if (!obj['sum']) {
          obj['sum'] = 0
        }
        obj['sum'] += v.price
        // also  can use this expression, but I think it is less semantic 
        //obj['sum'] = obj['sum'] ? (obj['sum'] + v.price) : (0 + v.price)
      } else {
        ac.push({name: v.date})
      }
      return ac
    }, [])

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
