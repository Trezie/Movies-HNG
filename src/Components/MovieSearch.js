import React, { useEffect, useState } from 'react';


function MovieSearch({ onSearch }) {
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);

    const handleSearch = () => {
        onSearch(query);
        setSearched(true);
      };
  return (
    <div>
        <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        
      
    </div>
  )
}

export default MovieSearch
