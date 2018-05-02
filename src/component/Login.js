import React from 'react';
import {connect} from 'react-redux';
import {_toggleModal} from '../actions/index';
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
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
  this.props._toggleModal()
  }
  render() {
    const {statutLogin,statutSign} = this.props;
    let loginCheck = statutLogin;
    let signinCheck = statutSign;
    return (<div>
      <Nav className="mr-5 nav-login" navbar="navbar">
        <NavItem className="login-nav pr-3">
          <NavLink href="#" onClick={this.toggle}>LOGIN</NavLink>
        </NavItem>
        <NavItem className="pl-3">
          <NavLink href="#" onClick={this.toggle}>SIGN UP</NavLink>
        </NavItem>
      </Nav>
      <Modal isOpen={loginCheck} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={signinCheck} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
         mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>)
  }
}
const mapStateToProps=state=>({
  statutLogin:state.price.statutLogin,
  statutSign:state.price.statutSign
})
export default connect(mapStateToProps,{_toggleModal})(Login);
