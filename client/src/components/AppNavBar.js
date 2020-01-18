import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

import RegisterModal from "./auth/RegisterModal";
import Logout  from "./auth/Logout";
import LoginModal from './auth/LoginModal';

 

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
      <Navbar color="dark" dark expand="sm" className="mb-0">
        <Container>
          <NavbarBrand href='/' fixed='top'><h4><img src='/images/LogoMakr_4ZNYgN.png' width='35px' alt="logo"></img> BartCoin</h4></NavbarBrand>
          <NavbarToggler onClick={this.toogle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LoginModal />
              </NavItem>
              <NavItem>
                <RegisterModal />
              </NavItem>
              <NavItem>
                <Logout />
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