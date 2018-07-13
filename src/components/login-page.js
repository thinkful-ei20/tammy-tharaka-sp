import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
// import './login-page.css';
import LoginForm from './login-form';

export function loginPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="loginPage">
            <div className="content-container">
                <h2>Login</h2>
                <LoginForm />
            <   Link className="registerLink" to="/register">Register</Link><br></br>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(loginPage);

// <Link className="landingLink" to="/">Landing Page</Link>