import React from 'react';
import {connect} from 'react-redux';
import {_toggleModalLogin,_toggleModalSign} from '../actions/index';
import Logo from '../img/logo.png';
import {Button,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

 class Login extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
  }
  toggleLogin() {
  this.props._toggleModalLogin()
  }
  toggleSign(){
    this.props._toggleModalSign()
  }
  render() {
    const {statutLogin,statutSign} = this.props;
    return (<div>
      <Nav className="mr-5 nav-login" navbar>
        <NavItem className="login-nav pr-3">
          <NavLink href="#" onClick={this.toggleLogin}>LOGIN</NavLink>
        </NavItem>
        <NavItem className="pl-3">
          <NavLink href="#" onClick={this.toggleSign}>SIGN UP</NavLink>
        </NavItem>
      </Nav>
      <Modal isOpen={statutLogin}>
        <ModalHeader><img src={Logo} width="300" alt="logo goes here"/></ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleLogin}>Do Something</Button>
          <Button color="secondary" onClick={this.toggleLogin}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={statutSign} toggle={this.toggleSign}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
         mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleSign}>Do Something</Button>
          <Button color="secondary" onClick={this.toggleSign}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>)
  }
}
const mapStateToProps=state=>({
  statutLogin:state.price.statutLogin,
  statutSign:state.price.statutSign
})
export default connect(mapStateToProps,{_toggleModalLogin,_toggleModalSign})(Login);
