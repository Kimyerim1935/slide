import './App.css';

function App() {
  const he=1;
  const she=2; 
  return (
          <div className="num">
           {he}+{she}= {he+she}<br/>
          {he}*{she}= {he*she}<br/>
          {he}/{she}={he/she}<br/>
          {he}%{she}={he%she}
    </div>
    
  );
}

export default App;
