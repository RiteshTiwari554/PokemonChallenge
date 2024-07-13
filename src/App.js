import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import PokemonList from './Components/PokemonList';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <h1 className="text-center my-4">Pokemon Search</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <PokemonList searchQuery={searchQuery} />
    </Container>
  );
};

export default App;
