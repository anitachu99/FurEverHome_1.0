import { createContext, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import AboutUs from './sections/AboutUs';
import Faq from './sections/Faq';
import Homepage from './sections/Homepage';
import Adopt from './sections/Adopt';

function App() {
  const homepage = useRef(null);
  const aboutUs = useRef(null);
  const faq = useRef(null);
  const adopt = useRef(null);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage aboutUsRef={aboutUs} faqRef={faq} />} />
          <Route path='/Adopt' element={<Adopt />} />
        </Routes>
      </div>
  );
}

export default App;
