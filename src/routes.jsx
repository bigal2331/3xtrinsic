import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import App from "./App";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

export default () => {
    
    return (
        
      <Router history={history}>  
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/chat" component={App} />
            <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>  
    );
    
    
    
}