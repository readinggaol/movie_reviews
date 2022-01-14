import Button from "./Button"

const Movie = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.release_date}</p>
            {props.actors.map((actor, i) => { return <span key={i}>{actor} </span>})}   
            <img src={props.poster}></img>
            <p>{props.rating}</p>
            <Button label="Remove" movie_name={props.title} movies={props.movies} setMovies={props.setMovies}/>
        </div>
    )
}

export default Movie
