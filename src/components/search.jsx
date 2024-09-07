import React from 'react';
import '../Search.css';

function Search({ setSearchTerm }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search cards..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
