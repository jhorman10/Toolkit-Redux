import React from 'react';
import { PokemonItem } from '../PokemonItem';

export const PokemonList = ({pokemons}) => {
  return (
    <ul>
      {pokemons.map(({ name, url }) => (
        <PokemonItem name={name} url={url} />
      ))}
    </ul>
  );
};
