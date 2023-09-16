import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movie details based on the 'id' parameter
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, [id]);
  console.log(movieDetails)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movieDetails) {
    return <p>Movie details not found.</p>;
  }

  return (
    <div>
      <h1 data-testid="movie-title" >
        {movieDetails.title}
      </h1>
      <p data-testid="movie-release-date">Release Date: {movieDetails.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
}

export default Movie;
