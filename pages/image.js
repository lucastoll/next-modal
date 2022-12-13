import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link';
import styled from 'styled-components';
import { Main as StylesMain, Container } from '../styles/styled';


export const ImageContainer = styled.div`
width: 100%;
max-width: 1240px;
height: 50vw;
position: relative;
border: 2px solid black;
`

const Main = styled(StylesMain)`
  width: 100%;
  padding: 0;
  border-top: 2px grey solid;
`

export default function HomeImage() {
  return (
    <Container>
        <Head>
          <title>next/image</title>
        </Head>
        <h1 className='title'>
          Welcome to <a href="#">next/image</a>
        </h1>
        <Link href="/">
          <h2>
            Click here to go back to home
          </h2>
        </Link>
        <Main>
            <h2>Layout fill + position relative no container</h2>
            <h3 style={{width: '100%', textAlign: 'center'}}>No reload, dependendo do tamanho da tela, uma imagem é renderizada com um peso e tamanho X, esses breakpoints estão definidos no next.config.js</h3>
            <ImageContainer>
              <Image fill priority src='/images/gandalf1920.jpg' alt="gandalf" />
              {
              /* 
              priority = sem lazy loading (carregar apenas no vw)
              propriedade quality padrão = 75
              */
              }
            </ImageContainer>
        </Main>
    </Container>
  )
}
