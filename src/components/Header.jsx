
import React from 'react'
import { CDN_URL } from '../utils/constants';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={CDN_URL} className="logo-container" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

export default Header;