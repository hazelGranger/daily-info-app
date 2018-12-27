import React from 'react'
import {
  ResponsiveContainer,
  PieChart as MuiPieChart,
  Pie,
  Sector,
  Cell
} from 'recharts'
import { withTheme } from '@material-ui/core/styles'

class PieChart extends React.Component {
  state = {
    activeIndex: 0
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    })
  }

  renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`$ ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`${(percent * 100).toFixed(1)}%`}
        </text>
      </g>
    )
  }

  render(){
    const { data, width, height, theme } = this.props
    const chartColor = theme.components.chart.color
    return(
      <ResponsiveContainer width={width} height={height}>
        <MuiPieChart >
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={this.renderActiveShape}
            data={data}
            dataKey="value"
            cx={width/2}
            cy={height/2}
            innerRadius={60}
            outerRadius={90}
            fill="#ff6f61"
            onMouseEnter={this.onPieEnter}
          >
            {
              data.map((v, i) =>
                <Cell key={i} fill={chartColor[i%chartColor.length]} />
              )
            }
          </Pie>
        </MuiPieChart>
      </ResponsiveContainer>
    )
  }
}

export default withTheme()(PieChart)
