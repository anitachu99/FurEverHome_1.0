import React from "react";
import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import style from "./styling/Login.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faXmark } from "@fortawesome/free-solid-svg-icons";
import Register from "./Register";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ( props ,{ Login, error } ) => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                console.log(errorCode, errorMsg);
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
                        <br></br>
                        {/* Notes: 'htmlFor' ==> gives id of associated input */}
                        <label htmlFor="username">Username:</label>
                        <br></br>
                        {/* below is the associated input id from label */}
                        <input 
                            type="email"
                            id="email"
                            className={style.loginBox}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br></br>
                        <label htmlFor="password">Password:</label><br></br>
                        <input 
                            type="password"
                            id="password"
                            className={style.loginBox}
                            onChange={(e) => setPwd(e.target.value)}
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