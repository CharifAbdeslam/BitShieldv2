import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import {
  Navbar,
  UncontrolledDropdown,
  Nav,
  NavLink,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';

const MenuExchange =()=>{
  return(
    <Navbar expand="md" id="exchange-nav">
    <img  className="logo-menu" src={logo} width="170" alt="BitShield"/>
      <Nav className="mr-auto ml-5" navbar>
        <NavItem>
          <NavLink className="nav-exchange-link" href="http://localhost:3000/">HOME</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            TRADE
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
export default MenuExchange;
