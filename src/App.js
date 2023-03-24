import React, { useState } from 'react';
import Header from './components/Header';
import CardMovie from './components/CardMovie';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter>
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<CardMovie searchQuery={searchQuery} />} />
        <Route path="/AddMovie" element={<AddMovie addMovie={console.log} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
