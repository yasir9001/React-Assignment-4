import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      toggle: false
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <p>
            {this.state.toggle ? 'Hello World' : 'Hello Pakistan'}
          </p>
          <button onClick = {() => this.setState({toggle: !this.state.toggle})} > click me !  </button>
        </div>
      </div>
    );
  }
}

export default App;



























