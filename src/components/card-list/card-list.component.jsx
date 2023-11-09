import { Component } from 'react'
import './card-list.styles.css'

class CardList extends Component {


    render() {
        const { monsters } = this.props;

        return(
            <div className="card-list">
                {monsters.map(({ id: monsterId, name: monsterName }) => (<h1 key={ monsterId }>{ monsterName }</h1>))} 
            </div>
        ) 
    }
}


export default CardList