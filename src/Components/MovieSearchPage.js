import React, { useEffect, useState } from 'react';
import MovieSearch from './MovieSearch';
import { fetchTop10Movies } from './Api'





function MovieSearchPage() {
  const [top10Movies, setTop10Movies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchTop10Movies = async () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb")
    .then(res => res.json())
    .then(json => setTop10Movies((json.results.slice(0, 12))))

  };

  const fetchMoviesByTitle = async (title) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb&query=${encodeURIComponent(title)}`
      );
      const data = await response.json();
      const first10Results = data.results.slice(0, 10); 
      return first10Results || [];
    } catch (error) {
      throw error;
    }
    
  };

  useEffect(() => {
    // Fetch top 10 movies initially
    fetchTop10Movies()
      .then((movies) => {
        setTop10Movies(movies);
      })
      .catch((error) => {
        console.error('Error fetching top 10 movies:', error);
      });
  }, []);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetchMoviesByTitle(query)
        .then((movies) => {
            setSearchResults(movies.slice(0, 10));
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
        setSearchResults([]);
    }
  }, [query]);

  return (
    <div>
      <h3 className='movieSearch'>Movie Search</h3>
      <MovieSearch onSearch={setQuery} />
      {loading ? (
        <p>Loading...</p>
      ) : searchResults.length > 0 ? (
        <div className="CardGrid">
          {searchResults.map((movie) => (
            <div key={movie.id} data-testid="movie-card" className='movie-card'>
                <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", height: "auto" }}
                data-testid="movie-poster"
                />
                <h4 data-testid="movie-title">{movie.title}</h4>
                <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
            </div>


          ))}
        </div>
        ) : (
            <p></p> // Display a message when there are no search results
            )}
            
  
      

    </div>
  );
}


      

export default MovieSearchPage
