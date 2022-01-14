import React from 'react'
import Movie from './Movie'

const MoviePane = (props) => {
    return (
        <div>
            {props.movies.map((movie, i) => { 
            return <Movie key={i} title={movie.name} release_date={movie.release_date} actors={movie.actors} poster={movie.poster} rating={movie.rating} />
            })}
        </div>
    )
}

export default MoviePane
