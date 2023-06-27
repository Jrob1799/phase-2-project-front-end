import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonForm = ({ onPokemonChange, onSubmit }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [team, setTeam] = useState(Array(6).fill(''));
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            setPokemonList(response.data.results);
        };

        fetchPokemon();
    }, []);

    const handleSelectChange = (index, event) => {
        const newTeam = [...team];
        newTeam[index] = event.target.value;
        setTeam(newTeam);

        if (onPokemonChange) {
            onPokemonChange(event.target.value);
        }
    };

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (onSubmit) {
            onSubmit({ username, team });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {team.map((pokemon, index) => (
                <select key={index} value={pokemon} onChange={event => handleSelectChange(index, event)}>
                    <option value="">--Please choose a Pokemon--</option>
                    {pokemonList.map(pokemon => (
                        <option key={pokemon.name} value={pokemon.name}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>
            ))}
            <input type="text" placeholder="Username" value={username} onChange={handleInputChange} />
            <button type="submit">Submit Team</button>
        </form>
    );
};

export default PokemonForm;