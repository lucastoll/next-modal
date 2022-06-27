import React, { useState } from "react";
import Head from "next/head";
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
