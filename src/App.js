import React, { Component } from 'react'

import Routes from './routes/Routes'
import MuiRouter from './routes/muirouter/'

class App extends Component {
  render() {
    return (
      <div>
        <MuiRouter />
        <Routes />
      </div>
    )
  }
}

export default App
