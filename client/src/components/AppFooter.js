import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from 'reactstrap';

class AppFooter extends Component {


  render() {
    return(
      <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
            <Nav className="ml-auto" navbar>
            </Nav>
        </Container>
      </Navbar>
    </div>
    );
    
  }
}

export default AppFooter;