import React, {Component} from 'react';
import Menu from './Menu';
import Landing from './Landing';
import Features from './Features';
class App extends Component {
  render() {
    return (<div>
      <div className="landing">
             <Menu />
             <Landing />
           </div>
         <Features />
    </div>
      );

  }
}

export default App;
