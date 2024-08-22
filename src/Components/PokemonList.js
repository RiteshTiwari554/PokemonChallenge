import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import PokemonCard from './PokemonCard';

const PokemonList = ({ searchQuery }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const promises = response.data.results.map(pokemon => axios.get(pokemon.url));
        const results = await Promise.all(promises);
        setPokemonList(results.map(result => result.data));
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, pokemonList]);

  return (
    <Row>
      {filteredPokemon.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Row>
  );
};

export default PokemonList;
