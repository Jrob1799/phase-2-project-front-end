import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectedPokemonCard from './SelectedPokemonCard';

const SavedTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get('http://localhost:4000/teams');
      const teamsData = response.data;
      
      for (let team of teamsData) {
        const pokemonData = await Promise.all(team.team.map(async (pokemonName) => {
          const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
          return pokemonResponse.data;
        }));
        team.team = pokemonData;
      }

      setTeams(teamsData);
    };
    fetchTeams();
  }, []);

  return (
    <div className="teams-container">
      {teams.map(team => (
        <div key={team.id} className="team-card">
          <h2>{team.username}</h2>
          <div className="cards-container">
            {team.team.map((pokemon, index) => (
              <SelectedPokemonCard key={index} pokemon={pokemon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedTeams;