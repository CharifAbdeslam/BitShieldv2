import React from 'react';
import {connect} from 'react-redux';
import {_getLive} from '../actions/index';
import {Col} from 'reactstrap';

class Liveprice extends React.Component {
  componentWillMount(){
    this.props._getLive()
  }
  render() {
    console.log(this.props.live)
    return (<Col md="6">
      table
    </Col>)
  }

}
const mapStateToProps=state=> ({price: state.price.live})
export default connect(mapStateToProps, {_getLive})(Liveprice);
