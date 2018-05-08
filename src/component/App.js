import React, {Component} from 'react';
import Menu from './Menu';
import Landing from './Landing';
import Features from './Features';
import Login from "./Login";
import Signup from "./Signup";
import {_signUp} from "../actions/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (<Router>
      <div>
      <div className="landing">
        <Menu/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={(props)=><Signup onSubmit={_signUp}/>}/>
        </Switch>
      </div>
      <Features/>
    </div>
    </Router>);

  }
}

export default App;
