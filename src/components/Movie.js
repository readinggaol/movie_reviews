
const Movie = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.release_date}</p>
            {props.actors.map((actor, i) => { return <span key={i}>{actor} </span>})}   
            <img src={props.poster}></img>
            <p>{props.rating}</p>
        </div>
    )
}

export default Movie
