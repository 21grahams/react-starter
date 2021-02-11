import React, {useState} from 'react';

var movieTitles = ({movieTitle}) => {

  const [hasWatched, toggleWatched] = useState(false)

  return (
  <div>
    <h4>{movieTitle}</h4>
    <button style={{'background' : hasWatched ? 'green' : 'white'}} onClick={() => toggleWatched(!hasWatched)}>{hasWatched ? 'WATCHED' : 'NOT WATCHED'}</button>
  </div>
  )};

export default movieTitles;