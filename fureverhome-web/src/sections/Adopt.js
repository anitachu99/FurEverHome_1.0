import catImage from './images/cat.png';
import dogImage from './images/dog.png';

const Adopt = () => {
    return (
      <section id='adopt_section'>
        <div id='heading_wrapper'>
          <h1 id='heading'>About Us</h1>
        </div>
        <img id='catPic' src={catImage} alt='' />
        <img id='dogPic' src={dogImage} alt='' />
      </section>
    )
}

export default Adopt