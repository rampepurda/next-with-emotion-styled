import {Header, Navigation} from '../components'
import { AppProps } from 'react-dom'
import Head from "next/head"
import { linksHeader } from '../configuration/common'
import {  Nav } from "../styles-js"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header>
        <Nav
          navDisplay={'inline-block'}
          borderBottom={'0'}
          linkPadding={'.6rem 1rem'}
          linkColor={'#fff'}
          linkFontSize={'1.3rem'}
          aria-label='main'
        >
          <Navigation links={linksHeader} />
        </Nav>
      </Header>
      <Component {...pageProps} />
    </>
  )
}

