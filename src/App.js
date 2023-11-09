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
        {this.state.monsters.map(({ id: monsterId, name: monsterName }) => (<h1 key={ monsterId }>{ monsterName }</h1>))}
      </div>
    );
  }
}

export default App;
