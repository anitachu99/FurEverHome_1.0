import './App.css';
import catImage from './images/cat.png';
import dogImage from './images/dog.png';

function App() {
  return (
    <div className="App">
      <div className='heading_box'>
        <h1 className='furEverHome_heading'>FurEver Home</h1>
      </div>
      <img id='catPic' src={catImage} alt='' />
      <img id='dogPic' src={dogImage} alt='' />
      <div className='menu_buttons'>
        <button className='aboutusBtn'>About Us</button>
        <button className='adoptBtn'>Adopt</button>
        <button className='faqBtn'>FAQ</button>
      </div>
    </div>
  );
}

export default App;
