import { pokemonApi } from '../../../api';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    const setData = {
      pokemons: data.results,
      page: page + 1,
    };

    dispatch(setPokemons(setData));
  };
};
