import React from 'react'
import Expense from '../pages/Expense'
import Currency from '../pages/Currency'

import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

export const routes = [
  {
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
    name: 'home',
    path: '/',
    component: Expense,
    title: 'Expense',
    icon: <TrendingUpIcon />
  }
]
