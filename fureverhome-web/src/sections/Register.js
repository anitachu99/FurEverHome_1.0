import React, {useState} from "react";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";
import style from "./styling/Register.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Register = ( props ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const navigate = useNavigate();

    // let navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setErrMsg("");
    //     try {
    //         await signingUp(email, pwd);
    //         navigate("/Login");
    //     } catch (error) {
    //         setErrMsg(error.message);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/Adopt")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                console.log(errorCode, errorMsg);
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
                    <br></br>
                    <label>Your Name:</label>
                    <br></br>
                    <input 
                        type="text"
                        id="name"
                        className={style.regBox}
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <br></br>
                    <label>Email:</label>
                    <br></br>
                    <input 
                        type="text"
                        id="email"
                        className={style.regBox}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <br></br>
                    <label>Password:</label>
                    <br></br>
                    <input 
                        type="password"
                        id="password"
                        className={style.regBox}
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
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