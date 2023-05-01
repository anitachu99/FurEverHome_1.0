import { createContext, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import AboutUs from './sections/AboutUs';
import Faq from './sections/Faq';
import Routing from './sections/Routing';
import Adopt from './sections/Adopt';
import Homepage from './sections/Homepage';

function App() {
  const aboutUsRef = useRef(null);
  const faqRef = useRef(null);
  const homepageRef = useRef(null);

  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Routing homepageRef={homepageRef} aboutUsRef={aboutUsRef} faqRef={faqRef} />} />
            <Route path='/Homepage' element={<Homepage ref={homepageRef}/>} />
            <Route path='/Adopt' element={<Adopt />} />
            <Route path='/AboutUs' element={<AboutUs ref={aboutUsRef} />} />
            <Route path='/Faq' element={<Faq ref={<Faq ref={faqRef} />} />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
