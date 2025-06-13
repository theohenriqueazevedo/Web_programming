//Obj: buscar pokemon e criar arq com o nome do primeiro pokemon

const axios = require('axios');

url = 'https://pokeapi.co/api/v2/pokemon/';

const buscaPokemon = async () => {
    const pokemons = await axios.get(url); 
    console.log(pokemons.data.results[18].name);
}

// const pokemons = axios.get(url); //get é funcao assincrona
buscaPokemon();

console.log('haha')