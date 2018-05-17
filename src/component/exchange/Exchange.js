import React from 'react';
import {Container,Row} from 'reactstrap';
import LeftWrapperExchange from './LeftWrapperExchange';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class Exchange extends React.Component {
  componentDidMount() {
    const landing = document.getElementById('landing');
    landing.classList.add("exchange-wrapper");
  }
  componentWillUnmount() {
    const landing = document.getElementById('landing');
    landing.classList.remove("exchange-wrapper");
  }

  render() {
    return (<Router>
      <Container fluid>
        <Row className="mt-2">
          <Switch>
            <Route exact path="/exchange" component={(props)=>
              <LeftWrapperExchange
                symbol="tickerEth"
                icon = "cc ETH"/>}/>
            <Route exact path="/exchange/ETH:BTC" component={(props)=>
              <LeftWrapperExchange
                symbol="tickerEth"
                icon = "cc ETH"/>}/>
          </Switch>
  </Row>
    </Container>
    </Router>
    )
  }
}
export default Exchange;
