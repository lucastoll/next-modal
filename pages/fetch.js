import React, { useState } from "react";
import Head from "next/head";
import Card from "../src/components/Card";
import styled from "styled-components";

import backgroundMobile from "../public/Image/backgroundmobile.jpg"
import backgroundDesktop from "../public/Image/backgrounddesktop.jpg"


const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 5px 30px 30px;
  height: 100vh;
  align-items: center;
  background: url(${backgroundMobile.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  input{
    width: 100px;
  }
  
  p {
    margin: 0;
    color: white;
    text-align: center;
  }

  form{
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 400px) {
    p, input, button {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1024px) {
    background: url(${backgroundDesktop.src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;
`;

export default function HomeFetch() {
  const [data, setData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState(1);
  const [inputPokemonGroup, setInputPokemonGroup] = useState(151);
  const [allowInputPokemonGroup, setAllowInputPokemonGroup] = useState(true)

  function VerifyAndPushPokemonContent(pokemon, array) {
    const newSprite = pokemon.sprites.other.dream_world.front_default;
    const oldSprite = pokemon.sprites.front_default;

    if (newSprite || oldSprite) {
      array.push(...data, {
        name: pokemon.name,
        sprite: newSprite || oldSprite,
        types: pokemon.types,
        stats: pokemon.stats,
      });
      setData(array);
    }
  }

  function handleGetPokemon(pokemonId) {
    const updateArray = [];

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((pokemon) =>
              VerifyAndPushPokemonContent(pokemon, updateArray)
            );
        } else {
          throw new Error(
            `Pokémon não encontrado! erro HTTP status: ${response.status}`
          );
        }
      })
      .catch((e) => alert(e.message));
    }

  function handleFormSubmit(event) {
    event.preventDefault();
    handleGetPokemon(searchPokemon);
    setAllowInputPokemonGroup(false)
  }

  function handleFormSubmitPromiseAll(event) {
    event.preventDefault();
    const endpoints = [];
    const promises = [];
    const updateArray = [];


    if (inputPokemonGroup < 1 || inputPokemonGroup > 898) {
      alert("Intervalo inválido.");
    } else {
    for (let i = 1; i <= inputPokemonGroup; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      promises.push(
        fetch(endpoints[i - 1]).then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
      );
    }

    Promise.all(promises).then((pokemons) =>
      pokemons.forEach((pokemon) =>
        VerifyAndPushPokemonContent(pokemon, updateArray)
      )
    );
  }
  setAllowInputPokemonGroup(false)
  }

  return (
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>

        <p>Busca um pokémon pelo número ou nome.</p>
      <form onSubmit={handleFormSubmit}>
        <input
          required
          type="text"
          value={searchPokemon}
          onChange={(event) => setSearchPokemon(event.target.value)}
        ></input>
        <button type="submit">Buscar pokémon.</button>
      </form>

      {allowInputPokemonGroup && 
      <>      
        <p>Busca vários pokemons.</p>
        <form onSubmit={handleFormSubmitPromiseAll}>
          <input
            required
            type="text"
            value={inputPokemonGroup}
            onChange={(event) => setInputPokemonGroup(event.target.value)}
          ></input>
          <button type="submit">Buscar pokémons.</button>
        </form>
      </>      
      }

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
