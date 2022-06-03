import React from 'react'
import { Container, Wrapper } from "../src/styles/styled";
import Footer from "../src/components/Footer";
import Head from 'next/head';
import Link from 'next/link';

export default function page404() {
  return (
    <Wrapper>
        <Head>
        <title>404</title>
      </Head>
      <Container>
        <h1 className="title">
          Welcome to <a href="#">page 404</a>, you're in the wrong place
        </h1>
        <div className="grid">
          <Link href="/">
            <div className="card" style={{marginTop: '100px'}}>
              <h2>Go back to home</h2>
            </div>
          </Link>
        </div>
      </Container>
      <Footer></Footer>
    </Wrapper>
  )
}
