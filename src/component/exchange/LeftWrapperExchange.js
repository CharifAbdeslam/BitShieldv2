import React from 'react';
import {Row , Col} from 'reactstrap';
import TickerSymbols from './TickerSymbols';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown';
import faSortUp from '@fortawesome/fontawesome-free-solid/faSortUp';
import loaderSm from '../../img/loader-sm.svg';
const lineHeight={
  lineHeight:1.2
};
const fontSize={
  fontSize:'12px',
  fontWeight:700
};

class LeftWrapperExchange extends React.Component{
  render(){
    const {ticker,icon,symbols} = this.props;
    let vol = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1"/>;
    let low = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
    let hight = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
    let avg = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
    let daylichange = "0.00";
    let daylichangePre = "0.00";
    let check = 0;
    if(ticker.length > 0 && ticker !== undefined) {
        vol = (ticker[1][7] / 1000).toFixed(3);
        low = ticker[1][9].toFixed(6);
        hight = ticker[1][8].toFixed(6);
        avg = ticker[1][6].toFixed(6);
        daylichange = (ticker[1][5] * 100).toFixed(2).toString().replace("-","");
        daylichangePre = ticker[1][4].toFixed(2).toString().replace("-","");
        check = ticker[1][5];
      }
    return(<div className="mt-2">
        <Col xs={2} className="exchange-price-wrapper exchange-field ml-2">
          <Row className="pl-2">
            <Col xs={2} className="p-0 text-center">
              <h1 className={icon + ' m-0'}></h1>
            </Col>
            <Col xs={5} className="p-0 text-center mt-2" style={lineHeight}>
              <span>{symbols}</span><br></br>
              <span style={fontSize}>VOL <span className="text-grey">
              {vol}</span> BTC
            </span><br></br>
            <span style={fontSize}>
              LOW <span className="text-grey">{low}</span>
            </span>
            </Col>
            <Col xs={5} className="p-0 text-center mt-2" style={lineHeight}>
              <span>{avg}</span><br></br>
              {check > 0 ?<span className="text-success" style={fontSize}>
                   {daylichangePre} <FontAwesomeIcon icon={faSortUp}/> (
                   {daylichange}%)</span>:
                   <span className="text-danger" style={fontSize}>
                   {daylichangePre} <FontAwesomeIcon icon={faSortDown}/> (
                   {daylichange}%)</span>
                 }
                 <br></br><span style={fontSize}>
                   HIGH <span className="text-grey">{hight}</span>
                 </span>
            </Col>
          </Row>
        </Col>
        <TickerSymbols history={this.props.history} />
      </div>);
  }
}

export default LeftWrapperExchange;

LeftWrapperExchange.propTypes={
  ticker:PropTypes.array.isRequired,
  icon:PropTypes.string.isRequired,
  symbols:PropTypes.string.isRequired,
};
