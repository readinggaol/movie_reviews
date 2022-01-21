import Button from "./Button"

const Movie = (props) => {
    return (
        <div className="movie">
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.release_date}</p>
            {props.actors.map((actor, i) => { return <p className="actor" key={i}>{actor} </p>})}   
            <img src={props.poster}></img>
            <p className="rating">Rating: {props.rating} / 5</p>
            <Button label="Remove" movie_name={props.title} movies={props.movies} setMovies={props.setMovies}/>
        </div>
    )
}

export default Movie
