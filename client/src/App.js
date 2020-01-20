import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from '../src/components/AppNavBar';
import AppFooter from '../src/components/AppFooter';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from "./actions/authActions";


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <>
                    <AppNavBar />
                    <AppFooter />
                </>
            </Provider>

        );
    }


}

export default App;



