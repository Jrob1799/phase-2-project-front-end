import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonForm = ({ addTeam }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [team, setTeam] = useState(Array(6).fill(''));
  const [username, setUsername] = useState('');

  // Fetch Pokemon when component mounts
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
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePokemonChange = (index) => (event) => {
    const newTeam = [...team];
    newTeam[index] = event.target.value;
    setTeam(newTeam);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" required />
      {[...Array(6)].map((_, index) => (
        <select key={index} value={team[index]} onChange={handlePokemonChange(index)} required>
          <option value="">--Choose a Pokemon--</option>
          {pokemonList.map(pokemon => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      ))}
      <button type="submit">Add Team</button>
    </form>
  );
};

export default PokemonForm;