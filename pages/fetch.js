import React, { useEffect, useState } from 'react'
import Head from "next/head";
import Link from "next/link";
import Card from '../src/components/Card';

export default function HomeFetch() {
  const [numberOfPokemons, setNumberOfPokemons] = useState(1)
  const [data, setData] = useState([])
  


  
  useEffect(() => {
    function getPokemon(pokemonId){
      const updateArray = [];
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(pokemon => {
        console.log(pokemon)
        
        updateArray.push(...data, {name: pokemon.name, sprite: pokemon.sprites.other.dream_world.front_default})
        setData(updateArray)
      }
      )}

      getPokemon(numberOfPokemons)
  }, [numberOfPokemons])


  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <p>Total number of pokemons: {numberOfPokemons}</p>
      <button onClick={() => setNumberOfPokemons(numberOfPokemons + 1)}>set number of pokemons</button>

      {
      Object.values(data).map((pokemon, i) => (
        <Card key={i} name={pokemon.name} sprite={pokemon.sprite} />
        ))
      }

    </div>
  )
}
