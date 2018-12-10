import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import Layout from './components/Layout'
import { routes } from './routes/routes'
import MuiRouter from './routes/muirouter/'

class App extends Component {

  render() {
    const route = routes.find(r => r.path === this.props.location.pathname)
    return route ? (
      <Layout>
        {
          route.name === 'home' ? (
            <Route key={route.name} exact path={route.path} component={route.component} />
          ) : (
            <Route key={route.name} path={route.path} component={route.component} />
          )
        }
      </Layout>
    ) : <MuiRouter />
  }
}

export default withRouter(App)
