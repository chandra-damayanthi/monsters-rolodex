import './card-list.styles.css'
import MonsterCard from '../monster-card/monster-card.component';



const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {
                monsters.map(
                    (
                        { 
                            id: monsterId, 
                            name: monsterName, 
                            email: monsterEmail 
                        }
                    )=> {
                        return <MonsterCard key={monsterId} name={monsterName} email={monsterEmail}/>
                    }
                )
            }
        </div>
    )
}

export default CardList