import React, { Component } from "react";
import { connect } from 'react-redux';
import { logout } from "../../actions/authActions";
import { NavLink, Button } from "reactstrap";
import { PropTypes } from "prop-types";


export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <NavLink onClick={this.props.logout} href='#'><Button>Logout</Button></NavLink>
            </div>
        )
    }
}

export default connect(
    null,
    { logout }
)(Logout);