import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a food"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
