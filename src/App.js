import './App.css';

import { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [], // Initial state of monsters property 
      searchValue: "" 
    }
  }
  // Once the component's rendered on the DOM initially 
  componentDidMount() { 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState(()=> {
          return {monsters: users}
        }, ()=> {
          console.log("User profiles has been loaded! Total: ", this.state.monsters.length)
        })
      }) 
  }

  render() {
    const { monsters, searchValue } = this.state
    const matchedMonsters = monsters.filter(({name: monsterName}) =>  monsterName.toLowerCase().includes(searchValue.toLowerCase()))

    return (
      <div className="App">
        <input type="search" 
          placeholder="Search your moster" 
          className="search-box"
          onChange={(e)=> {
            const { value: searchValue } = e.target;
            
            this.setState(()=> { 
              return { searchValue }
             })
          }}
        />
        {matchedMonsters.map(({ id: monsterId, name: monsterName }) => (<h1 key={ monsterId }>{ monsterName }</h1>))}
      </div>
    );
  }
}

export default App;
