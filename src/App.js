import logo from './logo.svg';
import './App.css';

import { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            State: <code>const i = 0</code>
          </p>
          <button>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
