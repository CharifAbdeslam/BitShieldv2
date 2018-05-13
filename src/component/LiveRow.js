import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
const LiveRow =({price,icon})=>{
  return(
    <tr>
      <th><FontAwesomeIcon icon={faStar}/></th>
      <td className="crypto-table"><i className={icon}/></td>
      <td>{price[7].toFixed(8)}</td>
      <td>{price[6] > 0 ?
           <span className="text-success">{(price[6]*100).toFixed(1)}%</span>:
           <span className="text-danger">{(price[6]*100).toFixed(1)}%</span>}</td>
      <td>{price[9].toFixed(8)}</td>
      <td>{price[10].toFixed(8)}</td>
      <td>{price[8]}</td>
    </tr>
  )
}
export default LiveRow;

LiveRow.propTypes = {
  price:PropTypes.array,
  icon:PropTypes.string.isRequired
}
