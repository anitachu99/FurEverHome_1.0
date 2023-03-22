import { useRef } from 'react';
import './App.css';
import AboutUs from './menuBtn_component/AboutUs';
import Faq from './menuBtn_component/Faq';
import catImage from './images/cat.png';
import dogImage from './images/dog.png';

function App() {

  const aboutUs = useRef(null);
  const faq = useRef(null);

  const scrollToSec = (e) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: 'smooth'
    })
  } 

  return (
    <div className="App">
      <div className='homepage'>
        <div className='heading_box'>
          <h1 className='furEverHome_heading'>FurEver Home</h1>
        </div>
        <img id='catPic' src={catImage} alt='' />
        <img id='dogPic' src={dogImage} alt='' />
        <div className='menu_buttons'>
          <button className='aboutusBtn' onClick={() => scrollToSec(aboutUs)}>About Us</button>
          <button className='adoptBtn'>Adopt</button>
          <button className='faqBtn' onClick={() => scrollToSec(faq)}>FAQ</button>
        </div>
      </div>
      <div ref={aboutUs} className='aboutUs_section'><AboutUs /></div>
      <div ref={faq} className='faq_section'><Faq /></div>
    </div>
  );
}

export default App;
