import React from 'react';
import PropTypes from 'prop-types';
import LiveRow from './LiveRow';
import {connect} from 'react-redux';
import {_getLive} from '../actions/index';
import {Col, Table} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import Loader from '../img/loader-big.svg';

class Liveprice extends React.Component {
  componentWillMount() {
    /* To do setInterval every one minute */
    this.props._getLive()
  }
  render() {
    const {price} = this.props;
    let bodyStatus = (<div className="liveprice-wrapper">
      <Table className="mt-4 live-price-table" responsive hover>
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
          <LiveRow price={price[0]} icon="cc ETH"/>
          <LiveRow price={price[1]} icon="cc BCH"/>
          <LiveRow price={price[2]} icon="cc XRP"/>
          <LiveRow price={price[3]} icon="cc LTC"/>
          <LiveRow price={price[4]} icon="cc XMR"/>
          <LiveRow price={price[5]} icon="cc ETC"/>
          <LiveRow price={price[6]} icon="cc IOTA"/>
          <LiveRow price={price[7]} icon="cc DASH"/>
          <LiveRow price={price[8]} icon="cc NEO"/>
          <LiveRow price={price[9]} icon="cc ZEC"/>
          <LiveRow price={price[10]} icon="cc EOS"/>
          <LiveRow price={price[11]} icon="cc OMG"/>
        </tbody>
      </Table>
    </div>);

    if (price.length === 0) {
      bodyStatus = (<div className="text-center" style={{width:'100%',minHeigth:'1000px'}}>
        <img src={Loader} alt="Loading..." className="mt-5"/>
      </div>);
    }
    return (<Col md="7" className="mt-3">
      {bodyStatus}
    </Col>);
  }
}
const mapStateToProps = state => ({price: state.price.live});
export default connect(mapStateToProps, {_getLive})(Liveprice);

Liveprice.propTypes = {
  price: PropTypes.array.isRequired,
  _getLive: PropTypes.func.isRequired
};
