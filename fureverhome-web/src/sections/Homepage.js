import { useRef, useState } from "react";
import { useNavigate, Router, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./AboutUs";
import Adopt from "./Adopt";
import Faq from "./Faq";
import catImage from './images/cat.png';
import dogImage from './images/dog.png';
import styles from './styling/HomePage.module.scss';

const Homepage = ({aboutUsRef, faqRef}) => {

    const navigate = useNavigate();
    
    const navigateToHome = () => {
        navigate('/');
    }
    const navigateToAdopt = () => {
        navigate('/Adopt');
    }

    function handleScroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <section className={styles.homepage}>
            <div className={styles.heading_box}>
                <h1 className={styles.furEverHome_heading}>FurEver Home</h1>
            </div>
            <img id={styles.catPic} src={catImage} alt='' />
            <img id={styles.dogPic} src={dogImage} alt='' />
            <button id={styles.aboutUs_btn} onClick={() => handleScroll(aboutUsRef)}>About Us</button>
            <button id={styles.faq_btn} onClick={() => handleScroll(faqRef)}>Faq</button>
            <button id={styles.adopt_btn} onClick={navigateToAdopt} >Adopt</button>

            <Routes>
                <Route path="/Adopt" element={<Adopt />} />
            </Routes>
        </section>
    )
}

export default Homepage