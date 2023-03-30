import catImage from './images/cat.png';
import dogImage from './images/dog.png';
import { forwardRef } from 'react';

const Faq = forwardRef((props, ref) => {
    return (
      <section ref={props.ref} id='faq_section'>
        <div id='heading_wrapper'>
          <h1 id='heading'>Faq</h1>
        </div>
        {/* <img id='catPic' src={catImage} alt='' />
        <img id='dogPic' src={dogImage} alt='' /> */}
      </section>
    )
});

export default Faq