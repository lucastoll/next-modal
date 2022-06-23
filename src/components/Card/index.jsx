import React from 'react'
import styled from "styled-components"

const arrayTypes = [
  {type: "NORMAL", color: "#AAAA99"},
  {type: "FIRE", color: "#FF4422"},
  {type: "WATER", color: "#3399FF"},
  {type: "ELECTRIC", color: "#FFCC33"},
  {type: "GRASS", color: "#77CC55"},
  {type: "ICE", color: "#66CCFF"},
  {type: "FIGHTING", color: "#BB5544"},
  {type: "POISON", color: "#AA5599"},
  {type: "GROUND", color: "#DDBB55"},
  {type: "FLYING", color: "#8899FF"},
  {type: "PSYCHIC", color: "#FF5599"},
  {type: "BUG", color: "#AABB22"},
  {type: "ROCK", color: "#BBAA66"},
  {type: "GHOST", color: "#6666BB"},
  {type: "DRAGON", color: "#776EE"},
  {type: "DARK", color: "#755544"},
  {type: "STEEL", color: "#AAAABB"},
  {type: "FAIRY", color: "#EE99EE"}
]

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
align-items: center;
h2{
  font-size: 24px;
  color: black;
  text-transform: capitalize;
}

img{
  width: 280px;
  height: 280px;
}
`

export default function Card({name, sprite}) {
  return (
    <Wrapper>
        <h2>{name}</h2>
        <img src={sprite} />
        <p></p>
    </Wrapper>
  )
}
