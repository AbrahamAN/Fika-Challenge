import React, { useState } from 'react';

const SearchBar = ({ className, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        className={`w-full sm:w-60 flex border-orionColor ${className}`}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        className="hidden sm:block mx-10 w-20 font-medium border bg-orionColor text-white p-2 rounded hover:bg-orionGreen"
        type="submit"
      >
        Search
      </button>
      <button
        className="sm:hidden mx-2 w-8 h-8 font-medium border bg-orionColor text-white p-1 rounded hover:bg-orionGreen"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 11-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
