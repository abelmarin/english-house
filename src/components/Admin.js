import React, { Component } from 'react';

import logo2 from '../assets/Logo-02.png';
import { Dashboard } from './Dashboard';

var loggedIn = true;

export default class Login extends Component {
    render() {
        if (loggedIn) {
            return (<Dashboard/>)
        } else {
            return (
                <div className="login-container">
                    <form className="login-form">
                        <img src={logo2} alt="Logo 2" className="login-logo" />
                        <input type="text" placeholder="Username"></input>
                        <input type="text" placeholder="Password"></input>
                        <button className="login-btn">Log In</button>
                    </form>
                </div>
            )
        }
    }
}
