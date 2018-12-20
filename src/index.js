import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from './App'
import reducer from './reducer/index'
import { theme } from './themes/theme'
import * as serviceWorker from './serviceWorker'

const loggerMiddleware = createLogger({collapsed: true})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, loggerMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
