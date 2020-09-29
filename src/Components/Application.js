import React, { useContext } from "react";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../providers/UserProvider";
import Dashboard from './Dashboard'
function Application() {
    const user = useContext(UserContext);
  return (
        user ?
        <Dashboard />
      :
        <Router>
        <Switch>
            <Route exact path="/">
                <SignIn />
            </Route>

            <Route exact path="/signup">
                <SignUp />
            </Route>

            <Route exact path="/passwordreset">
                <PasswordReset />
            </Route>
        </Switch>
        </Router>

  );
}
export default Application;