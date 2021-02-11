import React from 'react';
import MovieTitles from './MovieTitles.jsx';

var MovieList = ({films, toggleSwitch}) => (

  <div>
  {films.map((movie, i) => (
    <MovieTitles movieTitle={movie.title} key={i}/>
    ))}
  </div>
)

export default MovieList;