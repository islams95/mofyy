import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route ,Routes, BrowserRouter } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import NavBar from './components/Navbar';
import { Container } from "react-bootstrap";
import MovieDetails from './components/MovieDetails'


function App() {
  const [movies, setMovies] = useState([])
  const [pageNum, setPageNum] = useState([])
  // get all the movies
  const AllMovies = async () => {
  const response =  await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2717e7f029d8ae2699391ade9b105cda&language=en-US" )
  setMovies(response.data.results)
  setPageNum(response.data.total_pages)

}
// get the selected page
  const MoviePage = async (page) => {
  const response =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2717e7f029d8ae2699391ade9b105cda&language=en-US&page=${page}` )
  setMovies(response.data.results)
   setPageNum(response.data.total_pages)
}
useEffect(()=>{
AllMovies()

},[])
 const search = async (word) => {
    if (word === "") {
      AllMovies();
    } else {
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=2717e7f029d8ae2699391ade9b105cda&query=${word}&language=en-US`)
      
      setMovies(response.data.results)
      setPageNum(response.data.total_pages)
    }
}
  return (
   
     <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} MoviePage={MoviePage} pageNum={pageNum} />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
