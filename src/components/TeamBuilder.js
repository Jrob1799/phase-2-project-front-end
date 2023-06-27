import React, { useState } from 'react';
import axios from 'axios';
import PokemonForm from './PokemonForm';

const TeamBuilder = () => {
  const [teams, setTeams] = useState([]);

  const addTeam = async (username, team) => {
    const response = await axios.post('http://localhost:4000/teams', {
      username,
      team,
    });

    if (response.status === 200) {
      setTeams([...teams, response.data]);
    }
  };

  return (
    <div>
      <PokemonForm addTeam={addTeam} />
      {/* Rest of your UI here */}
    </div>
  );
};

export default TeamBuilder;