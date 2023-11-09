import './App.css';

import { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Anddy",
        },
        {
          id: 2,
          name: "Nnddy",
        },
        {
          id: 3,
          name: "Londay",
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
