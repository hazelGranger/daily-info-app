import React, { Component } from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { routes } from '../routes/routes'
import Header from './Header'
import Navbar from './Navbar'

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
})

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
    const { classes } = this.props
    return(
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Header title={this.getTitle()}
          drawerOpen={this.state.drawerOpen}
          handleDrawerOpen={this.handleDrawerOpen} />
        <Navbar
          drawerOpen={this.state.drawerOpen}
          handleDrawerClose={this.handleDrawerClose}  />
        <main className={classes.content}
          >
            <div className={classes.appBarSpacer} />
            { this.props.children }
        </main>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Layout))
