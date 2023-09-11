import { useState } from "react";
import style from "./styling/Faq.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FaqActive = ({ question, answer }) => {
    const [faqActive, setFaqActive] = useState(false);
    return (
        <div className={style.questionWrapper}>
            <div className={style.box} onClick={() => setFaqActive(!faqActive)}>
                <h2>{question}</h2>
                {faqActive ? <FontAwesomeIcon icon={faChevronUp} size="xl" color="white"/> : <FontAwesomeIcon icon={faChevronDown} size="xl" color="white"/>}
            </div>
            {faqActive && <p>{answer}</p>}
        </div>
    );
};

export default FaqActive;