import React, { useState } from 'react';
import PokemonForm from './PokemonForm';
import SelectedPokemonCard from './SelectedPokemonCard';
import axios from 'axios';

const TeamBuilder = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handlePokemonChange = async (pokemonName) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setSelectedPokemon(response.data);
    };

    const handleFormSubmit = async (formData) => {
        const response = await axios.post('http://localhost:4000/teams', formData);

        console.log(response.data); // log the response for debugging
    };

    return (
        <div>
            <PokemonForm onPokemonChange={handlePokemonChange} onSubmit={handleFormSubmit} />
            {selectedPokemon && <SelectedPokemonCard pokemon={selectedPokemon} />}
        </div>
    );
};

export default TeamBuilder;