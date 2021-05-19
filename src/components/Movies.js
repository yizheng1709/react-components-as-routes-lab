import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let list = movies.map(movie => {
    return(
    <div>
      {movie.title}<br></br>
      {movie.time}<br></br>
      <ul>
      {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {list}
    </div>
  );
};

export default Movies;
