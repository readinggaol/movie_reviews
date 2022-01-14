

const Button = (props) => {
    return (
        <button value={props.title} onClick={() => {
            props.setMovies(props.movies.filter(movie => movie.name !== props.movie_name))
        }}>{props.label}</button>
    )
}

export default Button
