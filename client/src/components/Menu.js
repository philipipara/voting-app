import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { isAuthenticated, signout } from './helper';




const Menu= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {user} = isAuthenticated();

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand  href="/">Voting Station</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuthenticated() && (
            <NavItem>
              <NavLink href="/signin">Sign In</NavLink>
            </NavItem>
            )}
            {!isAuthenticated() && (
            <NavItem>
              <NavLink href="/signup">Register</NavLink>
            </NavItem>
            )}
            <NavItem>
              <NavLink>FAQ</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Candidates
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.donaldjtrump.com/about">
                  Donald Trump
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="https://joebiden.com/">
                  Joe Biden
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              {isAuthenticated() && (
              <NavLink
              
              onClick={() => {
                signout(() => {
                  window.location.reload();
                  
                });
                
              }}
              
              >Signout</NavLink>
              )}
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;