import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
 
export default function Footer() {
  const FooterTag = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;

    .container{
      width: 30%;
      display: flex;
      padding: 2rem 0;
      border-top: 1px solid #eaeaea;
      justify-content: center;
      align-items: center;
    }

    
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }

    @media (prefers-color-scheme: dark) {
      border-color: white;
    }

  `

  const FooterLogoWrapper = styled.div`
    height: 1em;
    margin-left: 0.5rem;

    @media (prefers-color-scheme: dark) {
      filter: invert(1);
  }
`


  return (
  <FooterTag>
    <div className="container">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <FooterLogoWrapper>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </FooterLogoWrapper>
      </a>
    </div>
  </FooterTag>
  )
}
