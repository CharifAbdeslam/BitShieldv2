import React from 'react';
import {Row , Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {_getTicker} from '../../actions/index';
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
  componentDidMount(){
    this.props._getTicker(this.props.symbol)
  }
  render(){
    const {ticker,icon} = this.props;
    let vol = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1"/>;
    let low = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
    let hight = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
    let avg = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
    let daylichange = "0.00";
    let daylichangePre = "0.00";
    if(ticker.length > 0) {
        vol = (ticker[7] / 1000).toFixed(3);
        low = ticker[9].toFixed(6);
        hight = ticker[8].toFixed(6);
        avg = ticker[6].toFixed(6);
        daylichange = (ticker[5] * 100).toFixed(2).toString().replace("-","");
        daylichangePre = ticker[4].toFixed(2).toString().replace("-","");
        }
    return(<div>
        <Col xs={2} className="exchange-price-wrapper exchange-field ml-2">
          <Row className="pl-2">
            <Col xs={2} className="p-0 text-center">
              <h1 className={icon + ' m-0'}></h1>
            </Col>
            <Col xs={5} className="p-0 text-center mt-2" style={lineHeight}>
              <span>ETH/BTC</span><br></br>
              <span style={fontSize}>VOL <span className="text-grey">
              {vol}</span> BTC
            </span><br></br>
            <span style={fontSize}>
              LOW <span className="text-grey">{low}</span>
            </span>
            </Col>
            <Col xs={5} className="p-0 text-center mt-2" style={lineHeight}>
              <span>{avg}</span><br></br>
              {ticker[5] > 0 ?<span className="text-success" style={fontSize}>
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
      </div>);
  }
}
const mapStateToProps = state =>({
  ticker:state.price.liveTicker
  });
export default connect(mapStateToProps,{_getTicker})(LeftWrapperExchange);

LeftWrapperExchange.propTypes={
  _getTicker:PropTypes.func.isRequired,
  ticker:PropTypes.array.isRequired,
  symbol:PropTypes.string.isRequired
};
