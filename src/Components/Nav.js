import React from 'react';
import '../Stylesheets/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <div className="nav-title">
                <h3>iSell</h3>
            </div>
           
            <div className="nav-list-container">
                <ul className="nav-list">
                    <Link to="/postitem">
                        <li className="nav-list-option">Post an Item</li>
                    </Link>
                    <Link to="/myposts">
                        <li className="nav-list-option">My Posts</li>
                    </Link>
                    <Link to="/signin">
                        <li className="nav-list-option">Sign In</li>
                    </Link>
                    <Link to="/signup">
                        <li className="nav-list-option">Sign Up</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
