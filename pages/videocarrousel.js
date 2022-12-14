import Link from 'next/link'
import React, { useState }  from 'react'
import styled from 'styled-components'

import Frames from '../components/Frames'

import { infos }  from "../components/Frames/infos"


const Wrapper = styled.div`
position: relative;

.absolute{
  position: absolute;
  width: 100%;
  bottom: 30px;
}
`

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
position: relative;

@media screen and (max-height: 510px) {
  height: 200vh;
}

.content{
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  div {
    height: 150px;
    margin-bottom: 10px;
    width: 100%;
  }

}

h1{
  color: white;
  z-index: 1;
  justify-self: flex-start;
  margin-top: 30px;
}

p{
  color: white;
  z-index: 1;
  font-size: 16px;
  max-width: 50%;
  text-align: center;
}

video{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
}

.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
`

export default function Hero() {
  const [video, setVideo] = useState(0);
  return (
    <>
    <Wrapper>
      {infos.map((info, key) => (
        <Container key={key} video={video} style={key === video ? {display: "flex"} : {display: "none"}}>
          <div className='content'>
            <h1>{info.titulo}</h1>
            <p>{info.texto}</p>
            <div></div> 
          </div>
          <video src={info.src} width={"1920"} height={"1080"}  preload="auto" poster={info.thumbnail} loop muted autoPlay></video>
          <div className='overlay'></div>
        </Container>
      ))}
      <div className='absolute'>
        <Frames setVideo={setVideo}/>
      </div> 
    </Wrapper>
    <Link href="/">
        <h2 style={{textAlign: 'center'}}>Voltar para o home</h2>
    </Link>
    </>
  )
}