import React from 'react'
import { connect } from 'react-redux'

import PieChart from '../../components/charts/PieChart'

const ExpensePieChart = (props)=> {
  const data = props.expense.reduce((ac, v) => {
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
    />
  )
}

export default connect(
  state=>({ expense: state.expense }),
  null
)(ExpensePieChart)
