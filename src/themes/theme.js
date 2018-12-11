import { createMuiTheme } from '@material-ui/core/styles'

export const theme =  createMuiTheme({
  palette: {
    primary: {
      light: '#ff8b80',
      main: '#ff6f61',
      dark: '#b24d43',
      // contrastText: 'rgba(0, 0, 0, 0.87)'
      contrastText: '#fff'
    },
    secondary: {
      light: '#5298c8',
      main: '#277FBB',
      dark: '#1b5882',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
  },
})
