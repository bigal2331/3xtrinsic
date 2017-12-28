import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import App from "./App";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import createBrowserHistory from 'history/createBrowserHistory';
import requireAuth from './utils/requireAuth';

const history = createBrowserHistory()

export default () => {
    
    return (
        
      <Router history={history}>  
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/chat" component={requireAuth(App)} />
        </Switch>
      </Router>  
    );
    
    
    
}