import React from 'react'
import Box from './Box'
import Profile from '../pages/Profile'
import Notice from '../pages/Notices'
import Schedule from '../pages/Schedules'
import SingleNotice from "../pages/SingleNotice"

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom' 

import './DashBoard.css'


export default function Dashboard() {
    return (

  <Router>
  <div style={{display:'flex'}}>
    <Box />

  </div>


  <Switch>

  <Route exact path="/">
  <Notice />
  </Route>
<Route exact path="/profile">
  <Profile />
</Route>
<Route exact path="/notices">
  <Notice />
</Route>

<Route exact path="/notices/:slug">
  <SingleNotice />
</Route>
<Route exact path="/schedules">
  <Schedule />
</Route>
</Switch>
</Router>
    )
}