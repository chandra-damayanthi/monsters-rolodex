import './monster-card.styles.css'

const MonsterCard = ({ name, email })=> {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${name}?set=set2&size=180x180`} alt={`moster ${name}`}/>
            <h2>{ name }</h2>
            <p>{email}</p>          
        </div>
    )
}

export default MonsterCard