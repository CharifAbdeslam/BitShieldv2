import React, {Component} from 'react';
import Menu from './Menu';
import Landing from './Landing';
import Features from './Features';
import Login from "./Login";
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
        </Switch>
      </div>
      <Features/>
    </div>
    </Router>);

  }
}

export default App;
