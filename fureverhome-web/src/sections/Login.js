import React from "react";
import { useState } from "react";
import style from "./styling/Login.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Login = ( props ) => {
    const [userInfo, setUserInfo] = useState({ email: '', pwd: ''});
    const [userNotFound, setUserNotFound] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        props.handleLogIn(userInfo);

        signInWithEmailAndPassword(auth, userInfo.email, userInfo.pwd)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/Adopt");
        })
        .catch((error) => {
            const errCode = error.code;
            const errMessage = error.message;
            console.log(errCode, errMessage);

            if (errCode === "auth/user-not-found") {
                setUserNotFound("User not found");
            }
        })    
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
                        {userNotFound && <p style={{ color: 'red' }}>{userNotFound}</p>}
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