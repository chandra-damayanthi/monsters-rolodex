import { Component } from 'react'
import './monster-card.styles.css'



class MonsterCard extends Component {
    render() {
        const { name, email  } = this.props
        return (
            <div className="card-container">
                <img src={`https://robohash.org/${name}?set=set2&size=180x180`} alt={`moster ${name}`}/>
                <h2>{ name }</h2>
                <p>{email}</p>          
            </div>
        )
    }
}

export default MonsterCard