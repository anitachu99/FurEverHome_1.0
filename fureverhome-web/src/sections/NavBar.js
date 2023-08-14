import { useState } from "react";
import fur from "./images/feh_logo.png";
import style from "./styling/NavBar.module.scss";
import { NavBarItems } from "./NavBarItems";
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faCircleQuestion, faUser, faHandFist } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const NavBar = ({ setLoginPopup, setRegPopup }) => {
    const nav = useNavigate();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            nav("/");
            console.log("Signed Out Successfully");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            console.log(errorCode, errorMsg);
        });
    }
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
                <span onClick={() => setLoginPopup(true)} className={style.signInBtn}>Sign In</span>
                <span onClick={handleLogOut} className={style.signInBtn}>Log Out</span>
                <span onClick={() => setRegPopup(true)} className={style.signInBtn}>Register</span>
            </div>
        </div>
    )
}
export default NavBar
