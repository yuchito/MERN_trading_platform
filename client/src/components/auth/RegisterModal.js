import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';


class RegisterModal extends Component {
    state = {
        modal: false,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.message });
            } else {
                this.setState({ msg: null });
            }
        }

        // if modal open
        if (this.state.modal) {
            // once authenticated close modal
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { firstname, lastname, email, password } = this.state;

        const newUser = {
            firstname,
            lastname,
            email,
            password
        };

        this.props.register(newUser);



    };

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href='#'><Button color="primary">Register</Button></NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='firstname'>First name</Label>
                                <Input
                                    type='text'
                                    name='firstname'
                                    id='firstname'
                                    placeholder='First name'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Label for='lastname'>Last name</Label>
                                <Input
                                    type='text'
                                    name='lastname'
                                    id='lastname'
                                    placeholder='Last name'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='email'>Email</Label>
                                <Input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='password'>Password</Label>
                                <Input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='Password'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }} block>
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { register, clearErrors }
)(RegisterModal);