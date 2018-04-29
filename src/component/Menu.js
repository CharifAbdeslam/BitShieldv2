import React from 'react';
import logo from '../img/logo.png';

import {
  Navbar,
  UncontrolledDropdown,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
 const Menu =()=>{
  return(
    <Navbar expand="md" className="ml-5">
    <img  className="logo-menu" src={logo} width="170" alt="BitShield"/>
      <Nav className="mr-auto ml-5" navbar>
        <NavItem>
          <NavLink href="#">EXCHANGE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">SUPPORT</NavLink>
        </NavItem>
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
          <NavLink href="#">LOGIN</NavLink>
        </NavItem>
        <NavItem className="pl-3">
          <NavLink href="#">SIGN UP</NavLink>
        </NavItem>
      </Nav>
  </Navbar>
  )
}
export default Menu;
