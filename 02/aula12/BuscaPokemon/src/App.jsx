import './App.css'
import Pokemon from './Pokemon';
import axios from 'axios';

export default function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/1';

  const buscaPokemon = async () => {
    const pokemon = await axios.get(url);
    const pokemonName = pokemon.data.name;
    console.log(pokemonName);
  }

  return(
    <>
      <Pokemon nome="Bulbasauro"/>
      <Pokemon nome="riolu"/>
      <Pokemon nome="Lucario"/>
      <button onClick={buscaPokemon}>Buscar</button>
    </>
  )
}