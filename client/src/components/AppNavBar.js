import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from './auth/LoginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TradeComponent from './TradeComponent';
import AppHome from './AppHome';



class AppNavBar extends Component {

  state = {
    isOpen: false,
    dropDownOpen: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      dropDownOpen: !this.state.dropDownOpen
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const userLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mt-2 mr-3'>
            <strong>{user ? `Welcome ${user.firstname} ${user.lastname}` : ` `}</strong>
          </span>
        </NavItem>
        <NavItem>
          <span className='navbar-text mt-2 mr-3'>
            <strong>100 BRC</strong>
          </span>
        </NavItem>
        <NavItem>
          <ButtonDropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
            <DropdownToggle caret className='mt-2 mr-3'>
              Profile
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem></DropdownItem>
              <DropdownItem>My profile</DropdownItem>
              <DropdownItem>My wallet</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Contact us</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <NavItem>
          <LoginModal />
        </NavItem>
        <NavItem>
          <RegisterModal />
        </NavItem>
      </Fragment>
    )

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-0">
          <Container>
            <NavbarBrand href='/' fixed='top'><h4><img src='/images/LogoMakr_4ZNYgN.png' width='35px' alt="logo"></img> BartCoin</h4></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? userLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        {isAuthenticated ? <TradeComponent /> : <AppHome />}
      </div>
    );

  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavBar);