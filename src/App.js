import './App.css';
import Take01 from './SVG/Take01.jpg';
import Slider from './Slider.js';

function App() {
  return (
    <div className="App">
      <div className="slide">
        <img src={Take01} alt="Take01" / >
          <Slider / >
      </div>
    </div>
  );
}

export default App;
