import React from 'react';
import QRCode from './QRCode'; // Import the QRCode component

function MovieDetail({ movie }) {
  return (
    <div className="movie-detail">
      <h2>{movie.Name}</h2>
      <p>{movie.Genre}</p>
      <a href={movie['links-href']} target="_blank" rel="noopener noreferrer">
        Buy Tickets
      </a>
      {/* Render the QRCode component with the link */}
      <QRCode link={movie['links-href']} />
    </div>
  );
}

export default MovieDetail;
