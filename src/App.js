import logo from './logo.svg';
import './App.css';

import { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: "white"
    }
  }
  render() {
    const { count } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color: this.state.color}}>
            State: <code>const i = {count}</code>
          </p>
          <button onClick={()=> {
              this.setState(()=> ({ count: count + 1, color: 'blue' }), ()=> {
                console.log(this.state)
              })
              setTimeout(()=> this.setState({color: 'white'}), 200)
          }}>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
