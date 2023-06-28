import React, { useState } from 'react';
import PokemonForm from './PokemonForm';
import SelectedPokemonCard from './SelectedPokemonCard';
import axios from 'axios';

const TeamBuilder = ({ addTeam }) => {
  const [team, setTeam] = useState([]);

  const handleFormSubmit = async (formData) => {
    await axios.post('https://phase-2-react-app-backend.onrender.com/teams', formData);

    // Fetch data for each Pokemon in the team and set in state
    const teamData = await Promise.all(formData.team.map(pokemonName =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    ));
    setTeam(teamData.map(response => response.data));
  };

  return (
    <div className="team-builder">
      <PokemonForm onSubmit={handleFormSubmit} addTeam={addTeam} />
      {team.map(pokemon => (
        <SelectedPokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default TeamBuilder;