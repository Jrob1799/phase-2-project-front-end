
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

    return (
        <div>
            <PokemonForm onPokemonChange={handlePokemonChange} />
            {selectedPokemon && <SelectedPokemonCard pokemon={selectedPokemon} />}
        </div>
    );
};

export default TeamBuilder;