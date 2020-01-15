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

 

class AppNavBar extends Component {

  state = {
    isOpen: false
  }

  toogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href='/' fixed='top'><h4><img src='/images/LogoMakr_4ZNYgN.png' width='35px' alt="logo"></img> BartCoin</h4></NavbarBrand>
          <NavbarToggler onClick={this.toogle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='https://github.com/benhadinehoussam'><Button>Sign In</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/benhadinehoussam'><Button color="primary">Register</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/benhadinehoussam'><Button>About</Button></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
    );
    
  }
}

export default AppNavBar;