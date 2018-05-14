import React from 'react';
import {Container,Row} from 'reactstrap';
import {connect} from 'react-redux';
import LeftWrapperExchange from './LeftWrapperExchange';
class Exchange extends React.Component {
  componentDidMount() {
    const landing = document.getElementById('landing');
    landing.classList.add("exchange-wrapper");
  }
  componentWillUnmount() {
    const landing = document.getElementById('landing');
    landing.classList.remove("exchange-wrapper");
  }
  render() {
    return (<Container fluid>
        <Row className="mt-2">
    <LeftWrapperExchange {...this.props}/>
  </Row>
    </Container>)
  }
}
const mapStateToProps = state =>({price:state.price.live});
export default connect(mapStateToProps)(Exchange);
