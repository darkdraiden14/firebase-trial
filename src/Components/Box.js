import React,{useContext} from 'react';

import { UserContext } from "../providers/UserProvider";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import  {Link} from "react-router-dom"
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from './avatar.js'
import firebase from 'firebase'
import {auth} from "../firebase";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },link: {
    textDecoration:'none',
    color: theme.palette.text.primary
  }

}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

const user = useContext(UserContext);
const {photoURL, displayName, email} = user;

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} >
          <div className="avatar">
          <Avatar />
          </div>

          <h2 className = "text-2xl font-semibold">{displayName}</h2>
          </div>
        <Divider />
        <List>
       
            <Link to="/notices" className={classes.link}>
          <ListItem button>
              <ListItemText primary={"Notices"} />
            </ListItem>
            </Link> 
                  
            <Link to="/schedules" className={classes.link}>
          <ListItem button>
              <ListItemText primary={"Schedule"} />
            </ListItem>
            </Link> 
            <ListItem button onClick={() => {auth.signOut()}}>
              <ListItemText primary={"Sign Out"} />
            </ListItem> 
        </List>
      </Drawer>
    </div>
  );
}
