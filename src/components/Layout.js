import React, { Component } from 'react'
import { withRouter } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
// import { withStyles } from '@material-ui/core/styles'
import { routes } from '../routes/routes'
import Header from './Header'
import Navbar from './Navbar'

class Layout extends Component {

  constructor(props){
    super(props)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
  }

  state = {
    drawerOpen: true
  }

  getTitle() {
    const route = routes.find(r => r.path === this.props.location.pathname)
    return route ? route.title : null
  }

  handleDrawerOpen() {
    this.setState({drawerOpen: true})
  }

  handleDrawerClose() {
    this.setState({drawerOpen: false})
  }

  render(){
    return(
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Header title={this.getTitle()}
          drawerOpen={this.state.drawerOpen}
          handleDrawerOpen={this.handleDrawerOpen} />
        <Navbar
          drawerOpen={this.state.drawerOpen}
          handleDrawerClose={this.handleDrawerClose}  />
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Layout)
