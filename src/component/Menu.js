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
  DropdownItem,
Row,
Col} from 'reactstrap';
 const Menu =()=>{
  return(
    <Navbar expand="md">
    <img src={logo} width="170"/>
      <Nav className="mr-auto ml-5" navbar>
        <NavItem>
          <NavLink href="#">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">GitHub</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
  </Navbar>
  )
}
export default Menu;
