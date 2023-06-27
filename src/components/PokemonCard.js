import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <div>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Types: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        </div>
    );
};

export default PokemonCard;