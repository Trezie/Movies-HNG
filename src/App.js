import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'; // For creating links to movie details pages
import MovieDetailsPage from './Components/MovieDetailsPage';
import './App.css';
import Header from './Components/Header';
import { fetchTop10Movies } from './Components/Api';
import MovieSearch from './Components/MovieSearch';
import { fetchMoviesByTitle } from './Components/Api';
import MovieSearchPage from './Components/MovieSearchPage';
import Body from './Components/Body';
import Homepage from './Components/Homepage';
import Movie from './Components/Movie';

function App() {
 
  const [top10Movies, setTop10Movies] = useState([]);
  const fetchTop10Movies = async () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb")
    .then(res => res.json())
    .then(json => setTop10Movies((json.results.slice(0, 10))))

  };

  
  useEffect(()=>{
    fetchTop10Movies()
  }, [])
  console.log(top10Movies)


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />}/>
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        
        
        </Routes>


      </BrowserRouter>




    
    </div>

  );
}
export default App;


