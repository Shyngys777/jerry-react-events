import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ movie, index }) {
  return (
    <Link to={`/movie/${index}`} className="movie">
      <img src={movie['Image-src']} alt={movie.Name} />
      <h2>{movie.Name}</h2>
    </Link>
  );
}

export default Movie;