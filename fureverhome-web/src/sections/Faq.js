import catImage from './images/cat.png';
import dogImage from './images/dog.png';
import { forwardRef } from 'react';

const Faq = forwardRef((props, ref) => {
    return (
      <section ref={props.ref} id='faq_section'>
        <div id='heading_wrapper'>
          <h1 id='heading'>Faq</h1>
        </div>
      </section>
    )
});

export default Faq