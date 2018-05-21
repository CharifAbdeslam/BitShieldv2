import React from 'react';
import {Col,Table} from 'reactstrap';
import MarketRow from './MarketRow';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
class TickerSymbols extends React.Component{
  render(){
  return(<div className="mt-2">
    <Col xs={2} className="exchange-price-wrapper exchange-field ml-2 pr-1 pl-1 table-ticker">
      <span className="white-text ml-2">LIVE MARKET: <FontAwesomeIcon icon={faCircle}
            style={{color: '#78C653'}}/> </span>
          <Table  responsive hover>
            <thead>
              <tr>
                <th>SYMBOL</th>
                <th>PRICE</th>
                <th>VOLUME</th>
                <th>CHANGE</th>
              </tr>
            </thead>
            <tbody>
          <MarketRow  symbol="ETH:BTC"
                      ticker={this.props.tickerEth}
                      history={this.props.history}/>
          <MarketRow  symbol="BCH:BTC"
                      ticker={this.props.tickerBch}
                      history={this.props.history}/>
          <MarketRow  symbol="XRP:BTC"
                      ticker={this.props.tickerXrp}
                      history={this.props.history}/>
          <MarketRow  symbol="LTC:BTC"
                      ticker={this.props.tickerLtc}
                      history={this.props.history}/>
          <MarketRow  symbol="XMR:BTC"
                      ticker={this.props.tickerXmr}
                      history={this.props.history}/>
          <MarketRow  symbol="ETC:BTC"
                      ticker={this.props.tickerEtc}
                      history={this.props.history}/>
          <MarketRow  symbol="IOT:BTC"
                      ticker={this.props.tickerIot}
                      history={this.props.history}/>
          <MarketRow  symbol="DSH:BTC"
                      ticker={this.props.tickerDsh}
                      history={this.props.history}/>
          <MarketRow  symbol="NEO:BTC"
                      ticker={this.props.tickerNeo}
                      history={this.props.history}/>
          <MarketRow  symbol="EOS:BTC"
                      ticker={this.props.tickerEos}
                      history={this.props.history}/>
          <MarketRow  symbol="ZEC:BTC"
                      ticker={this.props.tickerZec}
                      history={this.props.history}/>
          <MarketRow  symbol="OMG:BTC"
                      ticker={this.props.tickerOmg}
                      history={this.props.history}/>
        </tbody>
          </Table>
    </Col>
  </div>);
}
}
const mapStateToProps=state=>({
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
})
export default connect(mapStateToProps)(TickerSymbols);
TickerSymbols.propTypes={
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
};
