import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import InfoIcon from '@material-ui/icons/Info'
import 'typeface-shrikhand'

import { routes } from '../routes/routes'

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: theme.components.drawer.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  navLink: {
    textDecoration: 'none',
    // overides the blue link color get a blue ripple
    color: theme.palette.primary.main
  },
  logo: {
    color: theme.palette.primary.main,
    fontFamily: '"Shrikhand", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    marginLeft: '8px',
  }
})

const Navbar = (props) => {
  const { classes, drawerOpen, handleDrawerClose } = props
  return(
    <Drawer
      variant="permanent"
      open={drawerOpen}
      classes={{
        paper: classNames(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
      }}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
          <Typography className={classes.logo}>
            Da
            <InfoIcon />
            ly
          </Typography>
      </div>
      <Divider />
      <List>
        {
          routes.map(r => r.name !== 'home' ? (
            <Link to={r.path} key={r.name} className={classes.navLink}>
              <ListItem  button>
                <ListItemIcon>
                  { r.icon }
                </ListItemIcon>
                <ListItemText primary={r.title} />
              </ListItem>
            </Link>
          ) : null)
        }
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Navbar)
