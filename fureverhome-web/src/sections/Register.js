import React, {useState} from "react";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";
import style from "./styling/Register.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Register = ( props ) => {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', pwd: ''});
    const [pwdErr, setPwdErr] = useState('');
    const [emailError, setEmailError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/[A-Z]/.test(userInfo.pwd)) {
            setPwdErr("Password must contain at least one uppercase letter.");
            return;
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/.test(userInfo.pwd)) {
            setPwdErr("Password must contain at least one symbol character.");
            return;
        }

        setPwdErr('');

        props.handleRegister(userInfo);

        await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/Adopt");
            })
            .catch((error) => {
                const errCode = error.code;
                const errMessage = error.message;
                console.log(errCode, errMessage);

                if (errCode === "auth/email-already-in-use") {
                    setEmailError("The email is already in use. Please sign in!");
                    setUserInfo({
                        name: '',
                        email: '', 
                        pwd: ''
                    })
                }
            }) 
    }

    return (props.onAction) ? (
        <div className={style.popupForm}>
            <div className={style.regForm}>
                <div className={style.regWrapper}>
                    <form onSubmit={handleSubmit}>
                    <button type="button" className={style.closeButton} onClick={() => props.setonAction(false)}>
                        <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#ffffff",}} />
                    </button>
                    {props.children}
                    <h1 className={style.regHeader}>Register</h1>
                    {pwdErr && <p style={{ color: 'red' }}>{pwdErr}</p>}
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    <br></br>
                    <label>Your Name:</label>
                    <br></br>
                    <input 
                        type="text"
                        id="name"
                        className={style.regBox}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} 
                        value={userInfo.name}
                        maxLength={15}
                        required
                    />
                    <br></br>
                    <label>Email:</label>
                    <br></br>
                    <input 
                        type="email"
                        id="email"
                        className={style.regBox}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} 
                        value={userInfo.email}
                        required
                    />
                    <br></br>
                    <label>Password:</label>
                    <br></br>
                    <input 
                        type="password"
                        id="password"
                        className={style.regBox}
                        onChange={(e) => setUserInfo({...userInfo, pwd: e.target.value})} 
                        value={userInfo.pwd}
                        maxLength={12}
                        required
                    />
                    <br></br>
                    <button className={style.regButton}>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    ) : null;
}

export default Register;