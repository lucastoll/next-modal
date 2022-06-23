import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link';
import styled from 'styled-components';
import { Container, Wrapper } from '../src/styles/styled';
import Footer from "../src/components/Footer";


export const ImageContainer = styled.div`
width: 100%;
max-width: 1240px;
height: 50vw;
position: relative;
border: 2px solid black;
`

export default function HomeImage() {
  return (
    <Wrapper>
        <Head>
          <title>next/image</title>
        </Head>
        <h1 className='title'>
          Welcome to <a href="#">next/image</a>
        </h1>
        <Link href="/">
        <a>
          <h2>
            Click here to go back to home
          </h2>
        </a>
        </Link>
        <Container style={{width: "100%"}}>
            <h2>Layout fill + position relative</h2>
            <h3 style={{width: '100%', textAlign: 'center'}}>No reload, dependendo do tamanho da tela, uma imagem é renderizada com um peso e tamanho X, esses breakpoints estão definidos no next.config.js</h3>
            <ImageContainer>
              <Image layout='fill' priority src='/Image/gandalf728.jpg' alt="Leao" />
              {
              /* 
              priority = sem lazy loading (carregar apenas no vw)
              propriedade quality padrão = 75
              */
              }
            </ImageContainer>
        </Container>
        <Footer />
    </Wrapper>
  )
}
