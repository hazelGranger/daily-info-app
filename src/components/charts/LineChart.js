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


const LineChart = (props) => {
  const { height, data, xKey, yKey, theme } = props
  const chartColor = theme.components.chart.color
  return(
    <ResponsiveContainer width="98%" height={height}>
      <MuiLineChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis domain={['dataMin', 'dataMax']} />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {
          yKey.map((v,i)=>(
            <Line key={i}
              type={v.type ? v.type : "monotone"}
              dataKey={v.keyName}
              stroke={v.color ? v.color : chartColor[i%chartColor.length]}
            />
          ))
        }
      </MuiLineChart>
    </ResponsiveContainer>
  )
}

export default withTheme()(LineChart)
