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
    },
    success: {
      light: '#33abaf',
      main: '#00979c',
      dark: '#00696d'
    },
    warning: {
      light: '#fde252',
      main: '#fddb27',
      dark: '#b1991b'
    },
    error: {
      light: '#ba5e7f',
      main: '#a93660',
      dark: '#762543'
    },
  },
  typography: {
    useNextVariants: true,
  },
  components: {
    modal: {
      headerPadding: '16px',
      contentPadding: '24px',
    },
    chart: {
      color: ['#b24d43', '#1b5882', '#00696d', '#7f619b', '#b1991b', '#762543',  '#81894e', '#263056']
    },
    drawer: {
      width: 240
    }
  }
})
