import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Liveprice from './Liveprice';
import Features from './Features';
const Landing = () => {
  return (<div>
    <Container className="mt-5 landing-banner" fluid>
    <Row>
      <Col md={{size: 3,offset: 1}}>
        <ReactCSSTransitionGroup
          transitionName="fadein"
          transitionAppear={true}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionAppearTimeout={1000}>
          <h1>
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{
                color: '#F27420'
              }}/>
            A World Class<br></br>
            Exchange Platform.
          </h1>
          <p className="mt-3">BitShield offer a world class exchange platform<br></br>
            with a real time chart ,order book and<br></br>
            trading history.</p>
            <Link to="/exchange">
          <Button size="lg" color="warning" outline>DEMO</Button>
          </Link>
        <Link to="/signup">
          <Button size="lg" className="ml-3">OPEN ACCOUNT</Button>
            </Link>
        </ReactCSSTransitionGroup>
      </Col>
      <Liveprice/>
    </Row>
  </Container>
<Features/>
</div>);
}
export default Landing;
