import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Expense from '../pages/Expense'
import Currency from '../pages/Currency'

class MuiRouter extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Currency} />
        <Route path='/expense' component={Expense} />
        <Route path='/currency' component={Currency} />
      </Switch>
    )
  }
}

export default MuiRouter
