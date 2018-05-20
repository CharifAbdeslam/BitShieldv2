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
          <MarketRow  symbol="ETH/BTC" ticker={this.props.tickerEth}/>
          <MarketRow  symbol="BCH/BTC" ticker={this.props.tickerBch}/>
          <MarketRow  symbol="XRP/BTC" ticker={this.props.tickerXrp}/>
          <MarketRow  symbol="LTC/BTC" ticker={this.props.tickerLtc}/>
          <MarketRow  symbol="XMR/BTC" ticker={this.props.tickerXmr}/>
          <MarketRow  symbol="ETC/BTC" ticker={this.props.tickerEtc}/>
          <MarketRow  symbol="IOT/BTC" ticker={this.props.tickerIot}/>
          <MarketRow  symbol="DSH/BTC" ticker={this.props.tickerDsh}/>
          <MarketRow  symbol="NEO/BTC" ticker={this.props.tickerNeo}/>
          <MarketRow  symbol="EOS/BTC" ticker={this.props.tickerEos}/>
          <MarketRow  symbol="ZEC/BTC" ticker={this.props.tickerZec}/>
          <MarketRow  symbol="OMG/BTC" ticker={this.props.tickerOmg}/>
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
