import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {_getLive} from '../actions/index';
import {Col,Table} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

class Liveprice extends React.Component {
  componentWillMount(){
    this.props._getLive()
  }
  render() {
    const {price} = this.props;
    if(price.length === 0){
    return <h1>Loading ......</h1>
    }
    return (<Col md="7">
      <div className="liveprice-wrapper">
        <Table className="mt-4 live-price-table">
          <thead>
            <tr>
              <th><FontAwesomeIcon icon={faStar}/></th>
              <th>SYMBOL</th>
              <th>LAST PRICE</th>
              <th>24 CHANGE</th>
              <th>24 HIGH</th>
              <th>24 LOW</th>
              <th>24 VOLUME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><FontAwesomeIcon icon={faStar}/></th>
              <td className="crypto-table"><i className="cc BTC"/></td>
              <td>{price[0][7]}</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>

    </Col>)
  }

}
const mapStateToProps=state=> ({price: state.price.live});
export default connect(mapStateToProps, {_getLive})(Liveprice);

Liveprice.propTypes = {
price:PropTypes.array,
_getLive:PropTypes.func
};
