import React from 'react';
import {Row , Col,Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
const TickerSymbols = () =>{
  return(<div className="mt-2">
    <Col xs={2} className="exchange-price-wrapper exchange-field ml-2 table-ticker">
      <span className="white-text">Live: <FontAwesomeIcon icon={faCircle}  style={{
            color: '#78C653'
          }}/> </span>
          <Table  responsive hover>
            <thead>
              <tr>
                <th><FontAwesomeIcon icon={faStar}/></th>
                <th>SYMBOL</th>
                <th>PRICE</th>
                <th>VOLUME</th>
                <th>CHANGE</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </Table>
    </Col>
  </div>);
}
export default TickerSymbols;
