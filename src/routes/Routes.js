import React from 'react'
import Expense from '../pages/Expense'
import Currency from '../pages/Currency'
import Weather from '../pages/Weather'

import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import WeatherIcon from '@material-ui/icons/Cloud'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: Expense,
    title: 'Expense',
    icon: <MonetizationOnIcon />
  },{
    name: 'expense',
    path: '/expense',
    component: Expense,
    title: 'Expense',
    icon: <MonetizationOnIcon />
  },{
    name: 'currency',
    path: '/currency',
    component: Currency,
    title: 'Currency',
    icon: <TrendingUpIcon />
  },{
    name: 'weather',
    path: '/weather',
    component: Weather,
    title: 'Weather',
    icon: <WeatherIcon />
  }
]
