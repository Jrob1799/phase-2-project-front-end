import React, { useState } from 'react';
import axios from 'axios';
import PokemonForm from './PokemonForm';

const TeamBuilder = () => {
  const [team, setTeam] = useState([]);
  const [username, setUsername] = useState('');

  const addPokemon = (pokemon) => {
    if (team.length < 6) {
      setTeam([...team, pokemon]);
    }
  };

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:3000/teams', {
      username: username,
      team: team,
    });

    if (response.status === 200) {
      setTeam([]);
      setUsername('');
    }
  };

  return (
    <div>
      <PokemonForm addPokemon={addPokemon} />
      {/* Rest of your UI here */}
    </div>
  );
};

export default TeamBuilder;