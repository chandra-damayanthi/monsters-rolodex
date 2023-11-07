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
    const { count } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            State: <code>const i = {count}</code>
          </p>
          <button onClick={()=> {
              this.setState({ count: count + 1 })
          }}>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
