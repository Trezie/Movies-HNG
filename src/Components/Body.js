import React, { useEffect, useState } from 'react';
import Header from './Header'
import '../App.css';
import { Link } from 'react-router-dom';



function Body() {
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
    <div className='body'>
        <Header />
        <div className='body'>
          <h3 className='featured'>Featured Movies</h3>
          <div className='CardGrid'>
     
            {top10Movies.map((movie)=>(
              <div key ={movie.id} data-testid="movie-card" className='movie-card'>
                <Link to={`/movies/${movie.id}`}> 
                  <img style={{width:"100%", height:"auto", marginLeft: "10px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title} 
                    data-testid="movie-poster"
                  />
                  <h4 data-testid="movie-title">{movie.title}</h4>
                  <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
                </Link>  
              </div>
            ))}
          </div>
        </div>
      
    </div>
  )
}

export default Body
