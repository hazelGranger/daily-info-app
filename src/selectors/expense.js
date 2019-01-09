import { createSelector } from 'reselect'

import { getYMD, getDateBefore, getLastDays } from '../utils/timeFormat'

import {
  SHOW_LAST_DAYS,
  SHOW_ALL
} from '../actions/time'

const getTimeFilter = state => state.time.timeForExpense

const getExpense = state => state.expense

// get expense in last several days, how many days before? in timeFilter.num
export const getVisibleExpense = createSelector(
  [getTimeFilter, getExpense],
  (timeFilter, expense) => {
    switch (timeFilter.name) {
      case SHOW_LAST_DAYS:
        return expense.filter(v => v.date>getDateBefore(timeFilter.num))
      case SHOW_ALL:
        return expense
      default:
        return expense
    }
  }
)

export const getLineChartExpense = createSelector(
  [getVisibleExpense, getTimeFilter],
  (expense, timeFilter) => {
    const data = expense.reduce((ac, v) => {
      let obj = ac.find(d => d.name === v.date)
      if (!obj) {
        obj = {name: v.date}
        ac.push(obj)
      }
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
      return ac
    }, [])
    console.log(data);
    const datadisplay = getLastDays(timeFilter.num).reduce((ac, v)=>{
      let obj = data.find(d => d.name === v )
      ac.push(
        Object.assign({
          name: v,
          food: 0,
          living: 0,
          transportation: 0,
          learning: 0,
          others: 0,
          sum: 0
        }, obj)
      )
      return ac
    }, [])

    return datadisplay
  }
)
