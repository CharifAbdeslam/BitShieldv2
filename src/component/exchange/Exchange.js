import React from 'react';
import {Container,Row} from 'reactstrap';
import LeftWrapperExchange from './LeftWrapperExchange';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {_getTicker} from '../../actions/index';

class Exchange extends React.Component {
  componentDidMount() {
    const landing = document.getElementById('landing');
    const mainNav = document.getElementById('main-nav');
    mainNav.classList.add("hide");
    landing.classList.add("exchange-wrapper");
      this.props._getTicker();
  }
  componentWillUnmount() {
    const landing = document.getElementById('landing');
    const mainNav = document.getElementById('main-nav');
    mainNav.classList.remove("hide");
    landing.classList.remove("exchange-wrapper");
  }

  render() {
    return (<Router>
      <Container fluid>
        <Row>
          <Switch>
            <Route exact path="/exchange" component={(props)=>
              <LeftWrapperExchange
                symbols="ETH/BTC"
                ticker={this.props.tickerEth}
                icon = "cc ETH"/>}/>
            <Route exact path="/exchange/ethbtc" component={(props)=>
              <LeftWrapperExchange
                symbols="ETH/BTC"
                ticker={this.props.tickerEth}
                icon = "cc ETH"/>}/>
           <Route exact path="/exchange/bchbtc" component={(props)=>
              <LeftWrapperExchange
                symbols="BCH/BTC"
                ticker={this.props.tickerBch}
                icon = "cc BCH"/>}/>
          </Switch>
     </Row>
    </Container>
    </Router>
    )
  }
}
const mapStateToProps = state =>({
  tickerEth:state.price.tickerEth,
  tickerBch:state.price.tickerBch,
  });
export default connect(mapStateToProps,{_getTicker})(Exchange);
Exchange.propTypes={
  tickerEth:PropTypes.array.isRequired,
  tickerBch:PropTypes.array.isRequired,
  _getTicker:PropTypes.func.isRequired
};
