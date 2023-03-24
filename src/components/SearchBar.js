import React, { useState } from 'react'

const SearchBar = ({className, onSearch }) => {

  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query)
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input 
      className={`w-60 flex ${className} `}
      type='text' 
      placeholder='Search...'
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      />
      <button className='mx-10 border border-gray-900 p-1 bg-cyan-300' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar