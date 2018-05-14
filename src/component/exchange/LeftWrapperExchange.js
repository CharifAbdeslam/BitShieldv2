import React from 'react';
import {Row , Col} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown';
import faSortUp from '@fortawesome/fontawesome-free-solid/faSortUp';
const lineHeight={
  lineHeight:1.2
};
const fontSize={
  fontSize:'12px',
  fontWeight:700
};
class LeftWrapperExchange extends React.Component{
  render(){
    const {price} = this.props;
    let vol = (price[0][8] / 1000).toFixed(3),
        low = price[0][10].toFixed(6),
        hight = price[0][9].toFixed(6),
        avg = price[0][7].toFixed(6);
    return(<div>
        <Col xs={2} className="exchange-price-wrapper exchange-field ml-2">
          <Row className="pl-2">
            <Col xs={2} className="p-0 text-center">
              <h1 className="cc ETH m-0"></h1>
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
              {price[0][6] > 0 ?<span className="text-success" style={fontSize}>
                   {price[0][5].toFixed(2)} <FontAwesomeIcon icon={faSortUp}/> (
                   {(price[0][6]*100).toFixed(2)}%)</span>:
                   <span className="text-danger" style={fontSize}>
                   {price[0][5].toFixed(2)} <FontAwesomeIcon icon={faSortDown}/> (
                   {(price[0][6]*100).toFixed(2)}%)</span>
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

export default LeftWrapperExchange;
