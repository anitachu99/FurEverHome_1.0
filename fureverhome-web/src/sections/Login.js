import React from "react";
import style from "./styling/Login.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faXmark } from "@fortawesome/free-solid-svg-icons";

const Login = ( props ) => {
    return (props.onAction) ? (
        <div className={style.popupForm}>
            <div className={style.loginForm}>
                <div className={style.loginWrapper}>
                    <form>
                        <button type="button" className={style.closeButton} onClick={() => props.setonAction(false)}>
                            <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#ffffff",}} />
                        </button>
                        {props.children}
                        <h1 className={style.loginHeader}>Sign In</h1>
                        <br></br>
                        <label>Username</label>
                        <br></br>
                        <input 
                            type="text"
                            name="username"
                            className={style.loginBox}
                        />
                        <br></br>
                        <label>Password</label><br></br>
                        <input 
                            type="password"
                            name="password"
                            className={style.loginBox}
                        />
                        <br></br>
                        <button className={style.loginButton}>LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    ) : null;
}

export default Login;