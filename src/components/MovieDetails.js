import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'


import axios from 'axios'

const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])
    const [tr, setTr] = useState([])
 
const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

    //get  movie by details 
    const getMovieDetails = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=b17bcbed865c50f6e51d550d06e0884e&language=enus`)
        setMovie(response.data)
    }
   const getMoviet = axios.get(`http://api.themoviedb.org/3/movie/${param.id}/videos?api_key=2717e7f029d8ae2699391ade9b105cda`)
  .then(response => {
    const firstObject = response.data.results[0];
    setTr(firstObject)
  })
  .catch(error => {
    console.error(error);
  });
   
    useEffect(() => {
        getMovieDetails();
      

    },[])


 

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                               Movie Name: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                 Release Date: {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                 Votes Numbers: {movie.vote_count}
                            </p> 
                            <p className="card-text-details border-bottom">
                                 Rating: {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">Overview:</p>
                        </div>
                        <div className="text-start px-2">
                            <p className="card-text-story"> {truncateString(movie?.overview, 250)}</p>
                           
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center d-flex  ">
                <Col  md="12" xs="12" sm="12" className="mt-1 " >
              <div>
                 <p className="card-text-title border-bottom">Trailers & Videos</p>
                 
                 {tr.key?( <ReactPlayer className=" w-100" url={`https://www.youtube.com/watch?v=${tr.key}`} />
      ):null}
              
              </div>
                       
                </Col>
            </Row>
             <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: " #b793dc", border: "none" }}
                            className="btn btn-primary mx-2">
                            Home Page
                        </button>
                    </Link>
                    <a href={movie.homepage} >
                        <button
                            style={{ backgroundColor: " #b793dc", border: "none" }}
                            className="btn btn-primary">
                        Movie Page
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
       
    )
}

export default MovieDetails
