import React from 'react'
import {
  ResponsiveContainer,
  LineChart as MuiLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { withTheme } from '@material-ui/core/styles'


class LineChart extends React.Component {

  render(){
    const { height, data, xKey, yKey, theme } = this.props
    const chartColor = theme.components.chart.color
    return(
      <ResponsiveContainer width="98%" height={height}>
        <MuiLineChart data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {
            yKey.map((v,i)=>(
              <Line key={i}
                type={v.type ? v.type : "monotone"}
                dataKey={v.keyName}
                stroke={v.color ? v.color : chartColor[i]}
              />
            ))
          }
        </MuiLineChart>
      </ResponsiveContainer>
    )
  }
}

export default withTheme()(LineChart)