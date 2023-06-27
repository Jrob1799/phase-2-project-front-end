import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonForm = ({ addTeam }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [team, setTeam] = useState(Array(6).fill(''));
    const [username, setUsername] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(Array(6).fill(null));

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
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

    const handlePokemonChange = (index) => async (event) => {
        const newTeam = [...team];
        newTeam[index] = event.target.value;
        setTeam(newTeam);
        const pokemonData = await axios(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`);
        const newSelectedPokemon = [...selectedPokemon];
        newSelectedPokemon[index] = pokemonData.data;
        setSelectedPokemon(newSelectedPokemon);
    };

    return (
        <div className="form-and-cards-container">
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" required className="username-input" />
                {[...Array(6)].map((_, index) => (
                    <select key={index} value={team[index]} onChange={handlePokemonChange(index)} required className="pokemon-select">
                        <option value="">--Choose a Pokemon--</option>
                        {pokemonList.map(pokemon => (
                            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                        ))}
                    </select>
                ))}
                <button type="submit" className="submit-button">Add Team</button>
            </form>
            <div className="cards-container">
                {selectedPokemon.map((pokemon, index) => pokemon && <PokemonCard key={index} pokemon={pokemon} />)}
            </div>
        </div>
    );
};

export default PokemonForm;
