import axios from 'axios';
import { useEffect, useState } from 'react';



const apiKey = 'f62ee32f237ff2b7b0aeeea0d73ad3cb'; 
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb';


export const fetchTop10Movies = async (movieId) => {
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=f62ee32f237ff2b7b0aeeea0d73ad3cb")
  .then(res => res.json())
  .then(json => (json.results.slice(0, 10)))
  
};

export const fetchMoviesByTitle = async (title) => {
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
