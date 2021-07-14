import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: rgb(8, 6, 11);

    img {
      height: auto;
      max-width: 100%;
    }
  }

  [aria-label="Link to profile"], [aria-label="Pancake home page"], [aria-label="Twitter"], [href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"] {
    display: none;
  }

  #root > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) {
    display: none;
  }

  #root > div:nth-child(1) > div > div:nth-child(1), #root > div:nth-child(1) > nav {
    background-color: rgb(39, 38, 44);
  }

  nav > div:nth-child(1) > button[aria-label="Toggle menu"] > svg, #root > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > a > svg {
    fill: rgb(184, 173, 210);
  }

  .step > div > div:nth-child(2) >div {
    background-color: #ED4B9E;
  }

  #root > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > a > div, #root > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(1) > div, #root > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > div > a > div  {
    color: rgb(184, 173, 210);
  }

  #root > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > div {
    background-color: rgb(39, 38, 44);
  }

  .step > div > div:nth-child(3) > div > div > h4 {
    color: #ED4B9E;
  }

  .roadmap > h2 {
    color: #ED4B9E;
  }

  nav > div:nth-child(2) > div > button {
    background-color: #ED4B9E;
    color: white;
  }

  #root > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
    box-shadow: inset 4px 0px 0px #ED4B9E;
  }

  [color="success"] {
    border-color: #ED4B9E;
    color: #ED4B9E;
  }
`

export default GlobalStyle
