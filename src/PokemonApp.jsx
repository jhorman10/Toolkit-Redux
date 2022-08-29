import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonList, Loader } from './components';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const onClickNext = () => {
    dispatch(getPokemons(page));
  };

  return (
    <div className="container">
      <h1>Pokemons</h1>
      {/* {!isLoading && <span className="loader2"></span>} */}
      {isLoading ? <Loader /> : <PokemonList pokemons={pokemons} />}
      <h4>Page: {page}</h4>
      <button disabled={isLoading} onClick={onClickNext}>
        Next
      </button>
    </div>
  );
};
