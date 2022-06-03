import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper } from '../src/styles/styled';

const ImageContainer = styled.div`
width: 90%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

border: 2px solid black;
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
        <Container>
            <h1 className='title'>
            About
            </h1>  
        </Container>
    </Wrapper>
  )
}
