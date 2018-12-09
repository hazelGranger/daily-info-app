import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from './dashboard/Dashboard'
import Pricing from './pricing/Pricing'
import Album from './album/Album'
import Blog from './blog/Blog'
import Checkout from './checkout/Checkout'
import SignIn from './sign-in/SignIn'


class MuiRouter extends Component {
  render() {
    return(
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/album' component={Album} />
        <Route path='/blog' component={Blog} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    )
  }
}

export default MuiRouter
