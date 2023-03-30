import { useRef } from 'react';
import './App.css';
import AboutUs from './sections/AboutUs';
import Faq from './sections/Faq';
import Homepage from './sections/Homepage';
import Adopt from './sections/Adopt';

function App() {
  const homepage = useRef(null);
  const aboutUs = useRef(null);
  const faq = useRef(null);

  return (
    <div className="App">
      <div ref={homepage}>
        <Homepage
          aboutUsRef={aboutUs}
          faqRef={faq}
        />
      </div>
      <div ref={aboutUs}>
        <AboutUs />
      </div>
      <div ref={faq}>
        <Faq />
      </div>
    </div>
  );
}

export default App;
