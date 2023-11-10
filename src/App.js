import './App.css';

import { useEffect, useState } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';




const App = () => {
  
  const [ monsters, setMonsters ] = useState([])
  const [ matchedMonsters, setMatchedMonsters ] = useState(monsters)
  const [ searchValue, setSearchValue ] = useState('')

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      setMonsters(()=> {
        return users 
      })
    }) 
  }, [])


  useEffect(()=> {
    setMatchedMonsters(
      monsters.filter(({name: monsterName}) =>  
        monsterName.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }, [monsters, searchValue])

  

  const searchHandler = (e) => {
    const { value: searchValue } = e.target;
            
    setSearchValue(()=> { 
      return searchValue 
     })
  }

  return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1> 
        <SearchBox searchHandler={searchHandler} placeholder="Search your monster" className="monsters-search-box"/>
        <CardList monsters={matchedMonsters}/>
      </div>
  )
}



export default App;
