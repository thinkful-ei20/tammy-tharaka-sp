import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './content.css';


export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="main-content-container">
            <div className="main-content-container2">
                <div className="content-container">
                    <div className="text-box">
                    Revisit America's unsung heroes through a deck of cards.
                    This is stuff you won't find in history books, 
                    the forgotten struggles and unifying strength brought to America by minorities, immigrants, and their supporters.
 
                    </div>
                <b>Get woke.</b>
                <ul className="content">
                    <li className="content"><Link to="/login">Login</Link></li>
                    <li className="content"><Link to="/register">Register</Link></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);


