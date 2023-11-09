import './App.css';

import { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  searchHandler = (e) => {
    const { value: searchValue } = e.target;
            
    this.setState(()=> { 
      return { searchValue }
     })
  }

  render() {
    const { monsters, searchValue } = this.state
    const matchedMonsters = monsters.filter(({name: monsterName}) =>  monsterName.toLowerCase().includes(searchValue.toLowerCase()))

    return (
      <div className="App"> 
        <SearchBox searchHandler={this.searchHandler} placeholder="Search your monster" className="monsters-search-box"/>
        <CardList monsters={matchedMonsters}/>
      </div>
    );
  }
}

export default App;
