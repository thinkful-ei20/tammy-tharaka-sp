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
            <h2>Login</h2>
            <LoginForm />
            <Link className="registerLink" to="/register">Register</Link><br></br>
            <Link className="landingLink" to="/">Landing Page</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(loginPage);
