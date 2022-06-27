import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Card from "../src/components/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 30px 30px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export default function HomeFetch() {
  const [data, setData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState(1);
  const [inputPokemonGroup, setInputPokemonGroup] = useState(10);
  const [apiResponse, setApiResponse] = useState("");

  async function getPokemon(pokemonId) {
    const updateArray = [];
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        if(response.ok){
          response.json()
          .then((pokemon) => {
            if(pokemon.sprites.other.dream_world.front_default){
              updateArray.push(...data, {
                name: pokemon.name,
                sprite: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types,
                stats: pokemon.stats,
              });
              setData(updateArray);
              setApiResponse("");
            }
            else if(pokemon.sprites.front_default){
              updateArray.push(...data, {
                name: pokemon.name,
                sprite: pokemon.sprites.front_default,
                types: pokemon.types,
                stats: pokemon.stats,
              });
              setData(updateArray);
              setApiResponse("");
            }
            else{
              setApiResponse("Pokémon não encontrado");
            }
          }); 
        }
        else{
          setApiResponse("Pokémon não encontrado");
        }
      })        
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    getPokemon(searchPokemon);
  }

  function handleFormSubmitPromiseAll(event) {
    event.preventDefault();
    const endpoints = []
    const promises = []
    const updateArray = [];

    if(inputPokemonGroup < 1 || inputPokemonGroup > 898){
      setApiResponse("Intervalo inválido.")
    }
    else{
      for(let i=1; i <= inputPokemonGroup; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        promises.push(fetch(endpoints[i-1]).then(response => response.json()))
      }

      Promise.all(promises)
        .then(pokemons => {
          pokemons.map(pokemon => {
            if(pokemon.sprites.other.dream_world.front_default){
              updateArray.push(...data, {
                name: pokemon.name,
                sprite: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types,
                stats: pokemon.stats,
              });
              setData(updateArray);
            }
            else if(pokemon.sprites.front_default){
              updateArray.push(...data, {
                name: pokemon.name,
                sprite: pokemon.sprites.front_default,
                types: pokemon.types,
                stats: pokemon.stats,
              });
              setData(updateArray);
            }
          })
        })
        .catch(setApiResponse("Erro, algum dos pokémons não foi encontrado."))
    }

  }

  return (
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>

      <p>Digite um nome ou o número de algum pokémon.</p>
      <form onSubmit={handleFormSubmit}>
        <input
          required
          type="text"
          value={searchPokemon}
          onChange={(event) => setSearchPokemon(event.target.value)}
        ></input>
        <button type="submit">Buscar pokémon.</button>
      </form>
      <p>Digite um número de pokemons para ser mostrado ao mesmo tempo.</p>

      <form onSubmit={handleFormSubmitPromiseAll}>
        <input
          required
          type="text"
          value={inputPokemonGroup}
          onChange={(event) => setInputPokemonGroup(event.target.value)}
        ></input>
        <button type="submit">Buscar pokémons.</button>
      </form>

      <p>{apiResponse}</p>
      <Container>
        {data.map((pokemon, i) => (
          <Card
            key={i}
            name={pokemon.name}
            sprite={pokemon.sprite}
            types={pokemon.types}
            stats={pokemon.stats}
          />
        ))}
      </Container>
    </Wrapper>
  );
}
