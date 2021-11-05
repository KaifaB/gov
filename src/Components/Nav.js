import React from 'react';
import { useHistory } from 'react-router-dom';

//import images
import Cursive from "../img/los-angeles-cursive.png";
import Hamburger from '../img/hamburger-button.png'

//React icons
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
    const history = useHistory();

    const toNotices = () => {
        history.push('/notices');
    }

    return(
        <div className="nav">
            <div className="nav-left">
                <div className="menu-box">
                    <GiHamburgerMenu className="burger" />
                    <p>MENU</p>
                </div>
                <div className="quick-flex city-name">
                    <h1>CITY of</h1>
                    <img className="cursive" src={Cursive} />
                </div>
            </div>

            <ul className="nav-right">
                <li>PAY AND APPLY</li>
                <li onClick={toNotices}>PUBLIC NOTICES</li>
                <li>FEEDBACK</li>
                <li>TRANSLATE</li>
            </ul>
        </div>
    )
}

export default Nav;