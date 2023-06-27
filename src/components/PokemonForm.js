import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonForm = ({ addTeam }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [team, setTeam] = useState(Array(6).fill(''));
  const [username, setUsername] = useState('');
  const [selectedPokemons, setSelectedPokemons] = useState(Array(6).fill(null));

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=151' // First 151 Pokemon
      );
      setPokemonList(result.data.results);
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTeam(username, team);
    setTeam(Array(6).fill(''));
    setUsername('');
    setSelectedPokemons(Array(6).fill(null));
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePokemonChange = (index) => async (event) => {
    const selectedPokemon = event.target.value;
    const newTeam = [...team];
    newTeam[index] = selectedPokemon;
    setTeam(newTeam);

    const pokemonData = await axios(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    setSelectedPokemons(prevSelectedPokemons => {
      const newSelectedPokemons = [...prevSelectedPokemons];
      newSelectedPokemons[index] = <PokemonCard key={index} pokemon={pokemonData.data} />;
      return newSelectedPokemons;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" required />
      {[...Array(6)].map((_, index) => (
        <div key={index}>
          <select value={team[index]} onChange={handlePokemonChange(index)} required>
            <option value="">--Choose a Pokemon--</option>
            {pokemonList.map(pokemon => (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </select>
          {selectedPokemons[index]}
        </div>
      ))}
      <button type="submit">Add Team</button>
    </form>
  );
};

export default PokemonForm;