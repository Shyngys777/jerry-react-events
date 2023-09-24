import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; // Import React Router
import movieData from './data.json'; // Import your JSON data

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Movie Listings</h1>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          {movieData.map((movie, index) => (
            <Route key={index} path={`/movie/${index}`}>
              <MovieDetail movie={movie} />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

function MovieList() {
  return (
    <div className="movie-list">
      {movieData.map((movie, index) => (
        <Link key={index} to={`/movie/${index}`}>
          <img src={movie['Image-src']} alt={movie.Name} />
          <h2>{movie.Name}</h2>
        </Link>
      ))}
    </div>
  );
}

function MovieDetail({ movie }) {
  return (
    <div className="movie-detail">
      <h2>{movie.Name}</h2>
      <p>{movie.Genre}</p>
      <a href={movie['links-href']} target="_blank" rel="noopener noreferrer">
        Buy Tickets
      </a>
    </div>
  );
}

export default App;
