import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=100'
      );
      setPokemon(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.name}>{poke.name}</div>
      ))}
    </div>
  );
};

export default Pokedex;