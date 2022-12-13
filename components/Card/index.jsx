import React, { useEffect, useState } from 'react'
import Image from 'next/dist/client/image'
import { StatContainer, StatWrapper, TypeContainer, TypeWrapper, Wrapper } from './styles'

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
          setgradientColor2(updateArray[1].color)
        }
      })
    }
}

  function handleStats (){
    let BestStatus 
    let SecondBestStatus

    BestStatus = {name: stats[0].stat.name.replace("special", "sp"), points: stats[0].base_stat}
    SecondBestStatus = {name: "", points: 0}

    stats.map((stat) => {
      if(stat.base_stat > BestStatus.points)
        BestStatus = {name: stat.stat.name.replace("special", "sp"), points: stat.base_stat}
    })

    stats.map((stat) => {
      if(stat.base_stat <= BestStatus.points && stat.stat.name.replace("special", "sp") != BestStatus.name && stat.base_stat > SecondBestStatus.points)
          SecondBestStatus = {name: stat.stat.name.replace("special", "sp"), points: stat.base_stat}
    })

    setPokemonStatus([BestStatus, SecondBestStatus])
  }

  useEffect(() => {
    handleTypes()
    handleStats()
  }, [])
  

  return (
    <Wrapper gradientColor1={gradientColor1} gradientColor2={gradientColor2} text={name}>
        <h2>{name}</h2>
        <div className='ImageWrapper'>
          <Image fill src={sprite} alt={name}/>
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
