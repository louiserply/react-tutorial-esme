import React from 'react';
import App from 'components/App/app';
import Login from 'components/Login/login';
import Logout from 'components/Logout/logout';
import Home from 'components/Home/home';
import Profile from 'components/Profile/profile';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AuthService from '../../services/authentification';

import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore();

export default class Root extends React.Component {

    requireAuth(nextState, replace) {
        if (!AuthService.loggedIn()) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    }

    render(){
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home} />
                        <Route path="home" component={Home} />
                        <Route path="profile" component={Profile} onEnter={this.requireAuth} />
                        <Route path="login" component={Login} />
                        <Route path="logout" component={Logout} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}
