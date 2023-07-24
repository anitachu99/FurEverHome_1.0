import { useState } from "react";
import fur from "./images/feh_logo.png";
import style from "./styling/NavBar.module.scss";
import { NavBarItems } from "./NavBarItems";
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faCircleQuestion, faUser, faHandFist } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";

const NavBar = ({ setPopup }) => {
    return (
        <div className={style.navBarWrapper}>
            <a href="/" className={style.homeLogo}>
                <img src={fur} className={style.logo} alt="logo" style={{ width: 100, height: 100 }}/>
            </a>
            <div className={style.searchBarWrapper}>
                <input 
                    className={style.searchbar}
                    type="text"
                    placeholder="Search Your FurEver Pet"
                />
            </div>
            <div className={style.iconMenu}>
                <a href="/" className={style.home_Icon}>
                    <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#c38d9e",}} alt="Home" />
                </a>
                <a href="/AboutUs" className={style.aboutUs_Icon}>
                    <FontAwesomeIcon icon={faCircleInfo} size="2xl" style={{color: "#c38d9e",}} />
                </a>
                <a href="/Faq" className={style.faq_Icon}>
                    <FontAwesomeIcon icon={faCircleQuestion} size="2xl" style={{color: "#c38d9e",}} />
                </a>
                <span onClick={() => setPopup(true)} className={style.signInBtn}>Sign In</span>
                
            </div>
        </div>
    )
}
export default NavBar
