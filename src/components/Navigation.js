import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem, NavLink, } from 'reactstrap';

const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Rick & Morty</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/characters">Characters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Neytoro">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Navigation;