import catImage from './images/cat.png';
import dogImage from './images/dog.png';
import { forwardRef } from 'react';

const AboutUs = forwardRef((props, ref) => {
    return (
      <section ref={props.ref} id='aboutUs_section'>
        <div id='heading_wrapper'>
          <h1 id='heading'>About Us</h1>
        </div>
      </section>
    )
});

export default AboutUs