import React from "react";
import { useState } from "react";
import style from "./styling/Login.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Login = ( props ) => {
    const [userInfo, setUserInfo] = useState({ email: '', pwd: ''});
    const [pwdErr, setPwdErr] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!/[A-Z]/.test(userInfo.pwd)) {
            setPwdErr("Password must contain at least one uppercase letter.");
            return;
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/.test(userInfo.pwd)) {
            setPwdErr("Password must contain at least one symbol character.");
            return;
        }

        setPwdErr('')
        props.handleLogIn(userInfo);
    }

    return (props.onAction) ? ( 
        <div className={style.popupForm}>
            <div className={style.loginForm}>
                <div className={style.loginWrapper}>
                    <form onSubmit={handleSubmit}>
                        <button type="button" className={style.closeButton} onClick={() => props.setonAction(false)}>
                            <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#ffffff",}} />
                        </button>
                        {props.children}
                        <h1 className={style.loginHeader}>Sign In</h1>
                        <br></br>
                        {/* Notes: 'htmlFor' ==> gives id of associated input */}
                        <label htmlFor="username">Username:</label>
                        <br></br>
                        {/* below is the associated input id from label */}
                        <input 
                            type="email"
                            id="email"
                            className={style.loginBox}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} 
                            value={userInfo.email}
                            required
                        />
                        <br></br>
                        <label htmlFor="password">Password:</label><br></br>
                        <input 
                            type="password"
                            id="password"
                            className={style.loginBox}
                            onChange={(e) => setUserInfo({...userInfo, pwd: e.target.value})}
                            value={userInfo.pwd}
                            required
                        />
                        {pwdErr && <p style={{ color: 'red' }}>{pwdErr}</p>}
                        <br></br>
                        <button className={style.loginButton}>LOGIN</button>
                        <p className={style.noaccount}>
                            Don't have an account?
                            <br></br>
                            <span className={style.registerlink} onClick={() => props.setRegPopup(true)}>
                                Register
                            </span>
                            {props.children}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    ) : null;
}

export default Login;