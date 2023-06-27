import React, { useState } from 'react';
import axios from 'axios';

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
    // your form UI here
  );
};

export default TeamBuilder;