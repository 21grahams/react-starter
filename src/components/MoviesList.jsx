// mapping over a listOfMovies
// sending props
import React from 'react';
import MovieTitles from './MovieTitles.jsx'

var MoviesList = (props) => (

  <div>
    {props.movies.map((movie, i) => (
      <MovieTitles movie={movie} key={i}/>
    ))}
  </div>
);

export default MoviesList;