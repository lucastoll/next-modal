import { GlobalStyle } from '../src/styles/GlobalStyled'

/* Aqui entra global styles e contexts */

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
