import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './sections/AboutUs';
import Faq from './sections/Faq';
import Routing from './sections/Routing';
import Adopt from './sections/Adopt';
import Homepage from './sections/Homepage';
import Login from './sections/Login';
import Register from './sections/Register';

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
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
