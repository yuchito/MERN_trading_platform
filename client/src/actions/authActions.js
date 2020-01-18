import axios from "axios";
import {
    USER_LOADING, USER_LOADED, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS,
    REGISTER_SUCCESS, REGISTER_FAIL
} from "../actions/types";

import { returnErrors } from "./errorActions";

// check token & load user
export const loadUser = () => (dispatch, getState) => {
    // load user
    dispatch({ type: USER_LOADING });


    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};

// register user 
export const register = ({ firstname, lastname, email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body
    const body = JSON.stringify({ firstname, lastname, email, password });

    axios.post('api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

// logout action 

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// login user

export const login = ({ email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body
    const body = JSON.stringify({ email, password });

    axios.post('api/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

// setting up headers/token 

export const tokenConfig = getState => {

    //get token from localStorage
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    // add token to header
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}