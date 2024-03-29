import fur from "./images/feh_logo.png";
import style from "./styling/NavBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "./SearchBar";

const NavBar = ({ emailInUse, handleLogOut, onInput, setLoginPopup, setRegPopup, user, userUnknown }) => {

    return (
        <div className={style.navBarWrapper}>
            <a href="/" className={style.homeLogo}>
                <img src={fur} className={style.logo} alt="logo" style={{ width: 100, height: 100 }}/>
            </a>
            <SearchBar onSearch={onInput}/>
            <div className={style.iconMenu}>
                <a href="/" className={style.home_Icon}>
                    <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#c38d9e",}} alt="Home" />
                </a>
                <a href="/AboutUs" className={style.aboutUs_Icon}>
                    <FontAwesomeIcon icon={faCircleInfo} size="2xl" style={{color: "#c38d9e",}} />
                </a>

                 {/* eslint-disable-next-line eqeqeq */}
                {(user.email !== '' && (emailInUse == false || userUnknown == false)) ? (
                    <> 
                        <h1 className={style.welcomeHeader}>Welcome, <span>{user.name}</span></h1>
                        <span onClick={handleLogOut} className={style.signInBtn}>Log Out</span>
                    </>
                ) : (
                    <>
                        <span onClick={() => setLoginPopup(true)} className={style.signInBtn}>Sign In</span>
                        <span onClick={() => setRegPopup(true)} className={style.signInBtn}>Register</span>
                    </>
                )}
            </div>
        </div>
    )
}
export default NavBar
