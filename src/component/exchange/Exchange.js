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
          <Route exact path="/exchange/xrpbtc" component={(props)=>
              <LeftWrapperExchange
                symbols="XRP/BTC"
                ticker={this.props.tickerXrp}
                icon = "cc XRP"/>}/>
          <Route exact path="/exchange/ltcbtc" component={(props)=>
              <LeftWrapperExchange
                symbols="LTC/BTC"
                ticker={this.props.tickerLtc}
                icon = "cc LTC"/>}/>
          <Route exact path="/exchange/xmrbtc" component={(props)=>
              <LeftWrapperExchange
                symbols="XMR/BTC"
                ticker={this.props.tickerXmr}
                icon = "cc XMR"/>}/>
          <Route exact path="/exchange/etcbtc" component={(props)=>
              <LeftWrapperExchange
                symbols="ETC/BTC"
                ticker={this.props.tickerEtc}
                icon = "cc ETC"/>}/>
          <Route exact path="/exchange/iotbtc" component={(props)=>
                <LeftWrapperExchange
                symbols="IOT/BTC"
                ticker={this.props.tickerIot}
                icon = "cc IOTA"/>}/>
          <Route exact path="/exchange/dshbtc" component={(props)=>
                <LeftWrapperExchange
                  symbols="DSH/BTC"
                  ticker={this.props.tickerDsh}
                  icon = "cc DASH"/>}/>
          <Route exact path="/exchange/neobtc" component={(props)=>
                  <LeftWrapperExchange
                  symbols="NEO/BTC"
                  ticker={this.props.tickerNeo}
                  icon = "cc NEO"/>}/>
          <Route exact path="/exchange/zecbtc" component={(props)=>
                  <LeftWrapperExchange
                  symbols="ZEC/BTC"
                  ticker={this.props.tickerZec}
                  icon = "cc ZEC"/>}/>
          <Route exact path="/exchange/eosbtc" component={(props)=>
                  <LeftWrapperExchange
                  symbols="EOS/BTC"
                  ticker={this.props.tickerEos}
                  icon = "cc EOS"/>}/>
          <Route exact path="/exchange/omgbtc" component={(props)=>
                  <LeftWrapperExchange
                  symbols="OMG/BTC"
                  ticker={this.props.tickerOmg}
                  icon = "cc OMG"/>}/>
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
  tickerXrp:state.price.tickerXrp,
  tickerLtc:state.price.tickerLtc,
  tickerXmr:state.price.tickerXmr,
  tickerEtc:state.price.tickerEtc,
  tickerIot:state.price.tickerIot,
  tickerDsh:state.price.tickerXmr,
  tickerNeo:state.price.tickerNeo,
  tickerZec:state.price.tickerZec,
  tickerEos:state.price.tickerEos,
  tickerOmg:state.price.tickerOmg,
  });
export default connect(mapStateToProps,{_getTicker})(Exchange);
Exchange.propTypes={
  tickerEth:PropTypes.array.isRequired,
  tickerBch:PropTypes.array.isRequired,
  tickerXrp:PropTypes.array.isRequired,
  tickerLtc:PropTypes.array.isRequired,
  tickerXmr:PropTypes.array.isRequired,
  tickerEtc:PropTypes.array.isRequired,
  tickerIot:PropTypes.array.isRequired,
  tickerDsh:PropTypes.array.isRequired,
  tickerNeo:PropTypes.array.isRequired,
  tickerZec:PropTypes.array.isRequired,
  tickerEos:PropTypes.array.isRequired,
  tickerOmg:PropTypes.array.isRequired,
  _getTicker:PropTypes.func.isRequired
};
