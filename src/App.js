import './App.css';
import React from 'react';

class App extends React.Component {
  state ={
    disabled:true
  }
  handleChange = (e) => {
    if(e.target.value.length >=6) {
      this.setState({
        disabled: false
      });
    }
  }
  render () {
    return(
      <div className="App">
      <form>
        <input type="text" placeholder="Your Name" onChange={this.handleChange} />
        <br/>
        <button disabled={this.state.disabled} >Proceed</button><br/>
        <input type="text" placeholder="Your address" onChange={this.handleChange} />
        <br/>
        <button disabled={this.state.disabled} >contact</button>
      </form>
</div>

    );
  }
}

export default App;
