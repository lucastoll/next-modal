import React from 'react'
import { Container, Main } from '../styles/styled'
import Head from 'next/head';
import Link from 'next/link';

export default function Page404() {
  return (
    <Container>
        <Head>
        <title>404</title>
      </Head>
      <Main>
        <h1 className="title">
          Welcome to <a href="#">page 404</a>, you`re in the wrong place
        </h1>
        <div className="grid">
          <Link href="/">
            <div className="card" style={{marginTop: '100px'}}>
              <h2>Go back to home</h2>
            </div>
          </Link>
        </div>
      </Main>
    </Container>
  )
}
