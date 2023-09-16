import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTop10Movies } from './Api';
import axios from 'axios';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] =useState(false);
  

  const fetchTop10Movies = async () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb")
    .then(res => res.json())
    .then(json => setMovieDetails((json.results)))

  };


  useEffect(()=>{
    fetchTop10Movies()
  },[]);
  /*const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb`
      );
      const data = await response.json();
      return data || {};
    } catch (error) {
      throw error;
    }
  };*/
  



  console.log(movieDetails)
    /*useEffect(() => {
      fetchTop10Movies(id)
      .then((details) => {
        setMovieDetails(details);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);
  console.log(movieDetails)*/
 
  return (
    <div>
       {movieDetails ? (
        <div>
          <h1 data-testid="movie-title" style={{backgroundColor:'red'}}>{movieDetails.title}</h1>
          <p data-testid="movie-release-date">Release Date: {movieDetails.release_date}</p>
          <p data-testid="movie-runtime">Runtime: {movieDetails.runtime} minutes</p>
          <p data-testid="movie-overview">{movieDetails.overview}</p>
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetailsPage;
