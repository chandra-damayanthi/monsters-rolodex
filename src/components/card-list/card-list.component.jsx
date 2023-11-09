import { Component } from 'react'


class CardList extends Component {


    render() {
        const { monsters } = this.props;

        return(
            <div>
                {monsters.map(({ id: monsterId, name: monsterName }) => (<h1 key={ monsterId }>{ monsterName }</h1>))} 
            </div>
        ) 
    }
}


export default CardList