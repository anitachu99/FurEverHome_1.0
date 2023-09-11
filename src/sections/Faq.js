import catImage from './images/cat.png';
import dogImage from './images/dog.png';
import { forwardRef, useEffect, useRef, useState } from 'react';
import style from './styling/Faq.module.scss';
import FaqActive from './FaqActive';

const Faq = forwardRef((props, ref) => {

    const faqData = ([
      {
        open: false,
        question: "How to sign in?",
        answer: "Please go to the adopt page and press the sign in button."
      },
      {
        open: false,
        question: "How to register?",
        answer: "Please go to the adopt page and press the register button."
      },
      {
        open: false,
        question: "How to search for adoptable pets?",
        answer: "Please search either cat or dog to find the right type of pet you want as your FurEver pet or you could keep on refreshing the page."
      },
      {
        open: false,
        question: "What is this website about?",
        answer: "This is a website to display all the available pets that could be your future FurEver pet"
      },
      {
        open: false,
        question: "Who founded this website?",
        answer: "Hi, I am Anita Chu. I am a inspiring frontend developer who not only designed this website but also implemented the entirety of the website from backend to frontend."
      },
      {
        open: false,
        question: "I tried to call the number but no one answered. Why is that?",
        answer: "That is because that is a fake phone number. "
      },
      {
        open: false,
        question: "How to share some more insight or issues of the website?",
        answer: "Although the phone number is fake, the email is not fake. You can contact me there."
      },
    ]);

    return (
      <section ref={props.ref} id={style.faq_section}>
        <div className={style.circleGroup1}>
          <div className={style.circle}></div>
          <div className={style.circle2}></div>
        </div>
        <div id={style.headerWrapper}>
          <h1 id={style.heading}>Frequently Asked Questions</h1>
        </div> 
        <div className={style.faqArticle}>
          {faqData.map((faqData, index) => (
            <FaqActive key={index} question={faqData.question} answer={faqData.answer}/>
          ))}
        </div>
      </section>
    )
});

export default Faq