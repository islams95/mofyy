import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
<Link to={`/movie/${movie.id}"`}>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
            <p>Movie Name : {movie.title}</p>
            <p>Release Date : {movie.release_date} </p>
            <p> Rating : {movie.vote_average}</p>
            <p> Number of Votes : {movie.vote_count} </p>
            </div>
          </div>
        </div>
  </Link>
    </Col >
  );
};

export default CardMovie;
