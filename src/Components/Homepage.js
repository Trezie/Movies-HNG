import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // For creating links to movie details pages

import '../App.css';
import Header from './Header';
import { fetchTop10Movies } from './Api';
import MovieSearch from './MovieSearch';
import { fetchMoviesByTitle } from './Api';
import MovieSearchPage from './MovieSearchPage';
import Body from './Body';



function Homepage() {

  const [top10Movies, setTop10Movies] = useState([]);
  const fetchTop10Movies = async () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb")
    .then(res => res.json())
    .then(json => setTop10Movies((json.results.slice(0, 12))))

  };
  
  useEffect(()=>{
    fetchTop10Movies()
  }, [])
  console.log(top10Movies)

  return (
     <div className="App">
      <div className='main'>
        <MovieSearchPage />
        <Body />
      </div>
    </div>

  )
}

export default Homepage
