import React from 'react';
import '../Stylesheets/Signin.css';

function Signin() {
    return (
        <div className="signin">
            <div className="signin-container">
                <input class="signin-input" placeholder="Username / Email"></input>
                <input class="signin-input" placeholder="Password"></input>
                <div className="btn-container">
                    <button className="button">Sign In</button>
                    <button className="button">Sign Up</button>
                </div>
                <div>
                    <h3 className="forgot-password-link">Forgot Password?</h3>
                    <h3 className="have-account-link">Need to make an account? Click here!</h3>
                </div>
            </div>
        </div>
    )
}

export default Signin;
