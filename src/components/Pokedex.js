import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            const promises = response.data.results.map(result => axios.get(result.url));
            const pokemonResponses = await Promise.all(promises);
            setPokemonList(pokemonResponses.map(response => response.data));
        };

        fetchData();
    }, []);

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default Pokedex;