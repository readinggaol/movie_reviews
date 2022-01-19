

const Button = (props) => {
    return (
        <button className="btn btn-danger" value={props.title} onClick={() => {
            props.setMovies(props.movies.filter(movie => movie.name !== props.movie_name))
        }}>{props.label}</button>
    )
}

export default Button
