import React from 'react';

export const PokemonItem = ({name, url}) => {
  return (
    <>
      {' '}
      <li key={url}>
        <p>{name}</p>
      </li>
    </>
  );
};
