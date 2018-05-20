import React from 'react';
import PropTypes from 'prop-types';
import loaderSm from '../../img/loader-sm.svg';
import {Link} from 'react-router-dom';

class MarketRow extends React.Component{

  render(){
  const {ticker,symbol} = this.props;
  let vol = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1"/>;
  let avg = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
  let daylichangePre = "0.00";
  let check = 0;
  if(ticker.length > 0 && ticker !== undefined) {
      vol = (ticker[1][7]).toFixed(3);
      avg = ticker[1][6].toFixed(8);
      check = ticker[1][5]
      daylichangePre = (ticker[1][5] * 100).toFixed(2);
    }

  return(<tr>
      <td>{symbol}</td>
      <td>{avg}</td>
      <td>{vol}</td>
      <td>{check > 0 ?
      <span className="text-success">{daylichangePre}%</span>:
      <span className="text-danger">{daylichangePre}%</span>}</td>
       </tr>)
  }
}
export default MarketRow;

MarketRow.propTypes = {
  ticker:PropTypes.array,
  symbol:PropTypes.string.isRequired
}
