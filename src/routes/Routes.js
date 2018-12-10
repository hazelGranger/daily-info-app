import Expense from '../pages/Expense'
import Currency from '../pages/Currency'

export const routes = [
  {
    name: 'expense',
    path: '/expense',
    component: Expense,
    title: 'Expense'
  },{
    name: 'currency',
    path: '/currency',
    component: Currency,
    title: 'Currency'
  },{
    name: 'home',
    path: '/',
    component: Expense,
    title: 'Expense'
  }
]
