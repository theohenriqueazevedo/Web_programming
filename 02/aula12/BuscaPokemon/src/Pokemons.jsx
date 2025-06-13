import React from 'react'
import { useState } from 'react'; // Importando o hook useState do React
import axios from 'axios'; // A lib axios permite fazer requisições HTTP

export default function Pokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';

    const [pokemons, setPokemons] = useState([]); // Inicializando o estado pokemons como um array vazio

    
      const buscaPokemon = async () => {
        const pokemonID = Math.floor(Math.random() * 1000) + 1; //Gera um ID aleatório entre 1 e 1000
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`; //Cria a URL da API com o ID aleatório  
        const pokemon = await axios.get(url); //faz a requisição na API do Pokemon 
        
        return pokemon;   
    }
    
    const adicionaPokemon = () =>{
        const vetorTemp = [];
        const pokemon = buscaPokemon(); // Chama a função para buscar um Pokémon
        vetorTemp.push(pokemon); // Adiciona o Pokémon retornado ao vetor temporário
        
    }
  return (
    
  )
}
