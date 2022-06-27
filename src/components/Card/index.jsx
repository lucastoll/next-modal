import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Image from 'next/dist/client/image'

const arrayTypes = [
  {name: "normal", color: "#AAAA99"},
  {name: "fire", color: "#FF4422"},
  {name: "water", color: "#3399FF"},
  {name: "electric", color: "#FFCC33"},
  {name: "grass", color: "#77CC55"},
  {name: "ice", color: "#66CCFF"},
  {name: "fighting", color: "#BB5544"},
  {name: "poison", color: "#AA5599"},
  {name: "ground", color: "#DDBB55"},
  {name: "flying", color: "#8899FF"},
  {name: "psychic", color: "#FF5599"},
  {name: "bug", color: "#AABB22"},
  {name: "rock", color: "#BBAA66"},
  {name: "ghost", color: "#6666BB"},
  {name: "dragon", color: "#76e"},
  {name: "dark", color: "#755544"},
  {name: "steel", color: "#AAAABB"},
  {name: "fairy", color: "#EE99EE"}
]

const Wrapper = styled.div`
border: 6px solid #fdd600;
display: flex;
padding: 10px 10px;
height: 570px;
flex-direction: column;
width: fit-content;
align-items: center;
justify-content: center;
gap: 10px;
background: linear-gradient(120deg, ${props => props.gradientColor1} 0%, ${props => props.gradientColor2} 100%);

h2{
  font-size: ${props => props.text.length >= 10 ? "20px" : "32px"};
  margin: 0;
  color: black;
  text-transform: uppercase;
}

.ImageWrapper{
  border: 5px solid black;
  width: 240px;
}
`
const TypeWrapper = styled.div`
display: flex;
width: 100%;
gap: 10px;
justify-content: center;
`

const TypeContainer = styled.div`
align-items: center;
background: ${props => props.background};
border-radius: 4px;
border: 1px solid black;
color: white;
display: flex;
font-size: 12px;
height: 26px;
justify-content: center;
text-align: center;
text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
text-transform: uppercase;
width: 66px;
`

const StatWrapper = styled.div`
width: 100%;
flex-wrap: wrap;
display: flex;
font-family: "PokemonDB";
text-transform: uppercase;
max-width: 240px;
`

const StatContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 5px;
align-items: center;
justify-content: center;
font-size: 16px;
text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);

.points{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  &::after{
    content: "";
    width: 100px;
    height: 5px;
    background-color: #000000;
    display: block;
  }
}
`


export default function Card({name, sprite, types, stats}) {
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonStats, setPokemonStatus] = useState([])
  const [gradientColor1, setgradientColor1] = useState("#000000")
  const [gradientColor2, setgradientColor2] = useState("#000000")


  function handleTypes (){
    const updateArray = []

    arrayTypes.map((typesArray) => {
      if(types[0].type.name == typesArray.name){
        updateArray.push(typesArray)
        setPokemonTypes(updateArray)
        setgradientColor1(updateArray[0].color)
        setgradientColor2(updateArray[0].color)
      }
    })
    if(types.length == 2){
      arrayTypes.map((typesArray) => {
        if(types[1].type.name == typesArray.name){
          updateArray.push(typesArray)
          setPokemonTypes(updateArray)
          setgradientColor1(updateArray[0].color)
          setgradientColor2(updateArray[1].color)
        }
      })
    }
}

  function handleStats (){
    const updateArray = []
    stats.map((stat) => {
      updateArray.push({name: (stat.stat.name).replace("special", "sp"), points: stat.base_stat})
      setPokemonStatus(updateArray)
    })
  }

  useEffect(() => {
    handleTypes()
    handleStats()
  }, [])
  

  return (
    <Wrapper gradientColor1={gradientColor1} gradientColor2={gradientColor2} text={name}>
        <h2>{name}</h2>
        <div className='ImageWrapper'>
          <Image width={280} height={280} src={sprite} alt={name}/>
        </div>
        <TypeWrapper>
        {
          pokemonTypes.map((type, i) => (
            <TypeContainer key={i} background={type.color}>{type.name}</TypeContainer>
          ))
        }
        </TypeWrapper>
        <StatWrapper>
        {
          pokemonStats.map((stats, i) => (
            <StatContainer key={i}>
              <div className='points'>
                {stats.points}
              </div>
              <div className='name'>
                {stats.name}
              </div>
            </StatContainer>
          ))
        }
        </StatWrapper>
    </Wrapper>
  )
}
