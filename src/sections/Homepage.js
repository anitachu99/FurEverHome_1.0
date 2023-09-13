import catImage from './images/cat.png';
import dogImage from './images/dog.png';
import styles from './styling/HomePage.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = ({aboutUsRef, faqRef}) => {
    const navigate = useNavigate();
    
    const navigateToAdopt = () => {
        navigate('/Adopt');
    }

    function handleScroll(ref = {current : null}) {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <section className={styles.homepage}>
            <div className={styles.circleGroup1}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
            </div>
            <div className={styles.heading_box}>
                <h1 className={styles.furEverHome_heading}>FurEver Home</h1>
            </div>
            <img id={styles.catPic} src={catImage} alt='' />
            <img id={styles.dogPic} src={dogImage} alt='' />
            <button id={styles.aboutUs_btn} onClick={() => handleScroll(aboutUsRef)}>About Us</button>
            <button id={styles.faq_btn} onClick={() => handleScroll(faqRef)}>Faq</button>
            <Link to="/Adopt"><button id={styles.adopt_btn} onClick={navigateToAdopt} >Adopt</button></Link>
        </section>
    )
};

export default Homepage