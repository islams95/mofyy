import React from 'react'
import { Row} from "react-bootstrap";
import MovieCard from "./MovieCard";
import Pagination from './Pagination';

const MoviesList = ({movies , MoviePage ,pageNum}) => {
  return (
     <Row className="mt-3">
        {
            movies.length >= 1 ? (movies.map((movie) => {
                return  <MovieCard key={movie.id} movie={movie}/>
                
            })) : <h3> No Movies</h3> }
              {movies.length >= 1 ? (<Pagination MoviePage={MoviePage} pageNum={pageNum} />) : null}

        
    
    
        </Row>     
         
          )
}

export default MoviesList