import React from 'react'
import Movie from './Movie'
import Header from './Header'

const MoviePane = (props) => {
    return (
        <div>
            <Header title="Movie Reviews"/>
            {props.movies.map((movie, i) => { 
            return <Movie key={i} 
            title={movie.name} 
            release_date={movie.release_date} 
            actors={movie.actors} 
            poster={movie.poster} 
            rating={movie.rating}
            movies={props.movies}
            setMovies={props.setMovies} />
            })}
        </div>
    )
}

export default MoviePane
