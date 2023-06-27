import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SavedTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get('http://localhost:4000/teams');
      setTeams(response.data);
    };
    fetchTeams();
  }, []);

  return (
    <div>
      {teams.map(team => (
        <div key={team.id}>
          <h2>{team.username}</h2>
          <ul>
            {team.team.map((pokemon, index) => (
              <li key={index}>{pokemon}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SavedTeams;