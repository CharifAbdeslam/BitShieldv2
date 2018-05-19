import React from 'react';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import {
  Navbar,
  UncontrolledDropdown,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
 const Menu =()=>{
  return(
    <Navbar expand="md" className="ml-5" id="main-nav">
    <img  className="logo-menu" src={logo} width="170" alt="BitShield"/>
      <Nav className="mr-auto ml-5" navbar>
          <Link to="/">HOME</Link>
          <Link to="/exchange">EXCHANGE</Link>
          <Link to="/support">SUPPORT</Link>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            MORE
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              HOW IT WORKS
            </DropdownItem>
            <DropdownItem>
              CONTACT US
            </DropdownItem>
            <DropdownItem>
              PRIVACY
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <Nav className="mr-5 nav-login" navbar>
        <NavItem className="login-nav pr-3">
          <Link to="/login">LOG IN</Link>
        </NavItem>
        <NavItem className="pl-3">
          <Link to="/signup">SIGN UP</Link>
        </NavItem>
      </Nav>
  </Navbar>
  )
}
export default Menu;
