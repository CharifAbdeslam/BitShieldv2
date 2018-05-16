import React from 'react';
import {Container,Row} from 'reactstrap';
import {connect} from 'react-redux';
import {_getTicker} from '../../actions/index';
import LeftWrapperExchange from './LeftWrapperExchange';
class Exchange extends React.Component {
  componentDidMount() {
    const landing = document.getElementById('landing');
    landing.classList.add("exchange-wrapper");
    this.props._getTicker();
  }
  componentWillUnmount() {
    const landing = document.getElementById('landing');
    landing.classList.remove("exchange-wrapper");
  }
  render() {
    if(this.props.ticker.length === 0){
      return(<div>Loading .........</div>)
    }
    return (<Container fluid>
        <Row className="mt-2">
    <LeftWrapperExchange {...this.props}/>
  </Row>
    </Container>)
  }
}
const mapStateToProps = state =>({
  ticker:state.price.liveTicker
  });
export default connect(mapStateToProps,{_getTicker})(Exchange);
