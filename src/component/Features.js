import React from 'react';
import {Container , Row , Col , Jumbotron} from 'reactstrap';

const Features = ()=>{
  return(<Container className="mt-5 features-wrapper">
    <Row>
      <Col>
        <h3 className="text-center">BITSHIELD PLATFORM FEATURS</h3>
      <Row  className="d-flex justify-content-center">
        <Col md="5" className="text-center">
            <p>BITSHIELD is an anonymous exchange platform for the leading cryptocurrency such as : Bitcoin , Bitcoin Cash , Ethereum , Litecoin , Monero , Ripple , Neo and Dash .</p>
        </Col>
      </Row>
      </Col>
    </Row>
  </Container>

  )
}
export default Features;
