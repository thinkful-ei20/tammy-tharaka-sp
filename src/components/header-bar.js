import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

import './header-bar.css';


export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let logInLink;
        if (this.props.loggedIn) {
            logOutButton = (
                <li><button className="button" onClick={() => this.logOut()}>Log out</button></li>
            );
        } 
        return (
            <div className="header-bar-container">
            <div className="header-bar">
                <ul>
                    <li><h1>Cards to get woke</h1></li>
                    {logOutButton}
                </ul>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
