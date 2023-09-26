
import React, { useContext } from 'react'
import { CDN_URL } from '../utils/constants';
import { Link } from "react-router-dom"
import UserContext from '../utils/context';

const Header = () => {

    const {userName}  = useContext(UserContext);
    
    return (
        
        <div className="header">
            <div>
                <Link to="/">
                    <img src={CDN_URL} className="logo-container" />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About </Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/cart'>cart</Link></li>
                    <li><Link to='/instamart'>instamart</Link></li>
                    <li style={{color:'#000'}}>{userName}</li>
                </ul>

            </div>
        </div>
    )
}

export default Header;