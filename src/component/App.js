import React, {Component} from 'react';
import Menu from './Menu';
import Landing from './Landing';
class App extends Component {
  render() {
    return (<div className="landing">
             <Menu />
             <Landing />
           </div>)

  }
}

export default App;
