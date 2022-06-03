import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link';
import styled from 'styled-components';
import { Container, Wrapper } from '../src/styles/styled';
import Footer from "../src/components/Footer";

const ImageContainer = styled.div`
width: 90%;
height: 60vh;
display: flex;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;

border: 2px solid black;
margin-top: 10px;
`


export default function Home() {
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
            <h3 style={{width: '90%'}}>No reload, dependendo do tamanho da tela, uma imagem é renderizada com um peso e tamanho X, esses breakpoints estão definidos no next.config.js</h3>
            <ImageContainer>
              <Image layout='fill' priority quality={100} src='/Image/leao6mb.jpg' alt="Gandalf" />
              {
              /* 
              priority = sem lazy loading (carregar apenas no vw)
              quality padrão = 75
              */
              }
            </ImageContainer>
        </Container>
        <Footer />
    </Wrapper>
  )
}
