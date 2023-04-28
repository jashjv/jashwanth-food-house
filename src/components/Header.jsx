
import React from 'react'
import { CDN_URL } from '../utils/constants';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={CDN_URL} className="logo-container" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About </Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/cart'>cart</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Header;