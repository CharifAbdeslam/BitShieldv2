import React, {Component} from 'react';
import Menu from './Menu';
import Landing from './Landing';
import Exchange from './exchange/Exchange'
import Login from "./Login";
import Signup from "./Signup";
import {_signUp} from "../actions/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (<Router>
      <div>
      <div className="landing" id="landing">
        <Menu/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={(props)=><Signup onSubmit={_signUp}/>}/>
          <Route exact path="/exchange" component={Exchange}/>
        </Switch>
      </div>
    </div>
    </Router>);

  }
}

export default App;
