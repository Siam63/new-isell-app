import React from 'react';
import '../Stylesheets/Signin.css';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div className="signin">
            <div className="signin-container">
                <input class="signin-input" placeholder="Username / Email"></input>
                <input class="signin-input" placeholder="Password"></input>
                <div className="btn-containers-container">
                    <div className="btn-container">
                        <button className="button">Sign In</button>
                        <Link to="/signup">
                            <button className="button">Sign Up</button>
                        </Link>
                    </div>
                </div>
                
                <div className="signin-text-container">
                    <h3 className="signin-link">Forgot Password?</h3>
                    <Link to="/signup">
                        <h3 className="signin-link">Need to make an account? Click here!</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;
