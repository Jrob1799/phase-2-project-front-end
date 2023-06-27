import React, { useState } from 'react';

const PokemonForm = ({ addPokemon }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addPokemon(inputValue);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter Pokemon" />
      <button type="submit">Add Pokemon</button>
    </form>
  );
};

export default PokemonForm;