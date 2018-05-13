import React from 'react';
import {Container , Row , Col} from 'reactstrap';
import Logo from '../img/logo.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUserSecret from '@fortawesome/fontawesome-free-solid/faUserSecret';
import faShield from '@fortawesome/fontawesome-free-solid/faShieldAlt';
const Features = ()=>{
  return(<div>
    <Container className="mt-5 features-wrapper p-0" fluid>
        <div style={{'width':"100%",'height':'50px','backgroundColor':'black'}}></div>
    <Row className="mt-5">
      <Col>
        <Col className="d-flex justify-content-center mb-3">
          <img src={Logo} alt="logo goes here" width="500"/>
        </Col>

        <h3 className="text-center">BITSHIELD PLATFORM FEATURS</h3>
      <Row  className="d-flex justify-content-center">
        <Col md="6" className="text-center">
            <p>BITSHIELD is an anonymous exchange platform for the leading cryptocurrency such as : Bitcoin , Bitcoin Cash , Ethereum , Litecoin , Monero , Ripple , Neo and Dash .</p>
        </Col>
      </Row>
      </Col>
    </Row>
    <Row className="mt-5 text-center justify-content-center">
      <Col md="5">
        <FontAwesomeIcon icon={faUserSecret} size="3x" className="mb-3"/>
        <h4>ANONYMITY AND PRIVACY</h4>
        <p style={{margin:0}}>We will never ask you or disclose your email , address or any other personal information.</p>
        <p>ANONYMITY AND PRIVACY is what make us diffrent from other exchanges.</p>
      </Col>
      <Col md="5">
        <FontAwesomeIcon icon={faShield} size="3x" className="mb-3"/>
        <h4>SECURITY</h4>
        <p>The security of your funds is our main priority,we perform a daily maintenance on the servers with our services your funds will never be lost or stolen.</p>
      </Col>
    </Row>
  </Container>
</div>
);
}
export default Features;
