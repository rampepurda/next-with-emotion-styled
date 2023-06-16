import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { Navigation } from "../../components"
import { linksPostSlug } from '../../configuration/common'
import { Nav } from "../../styles-js"

const PostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Post Page</title>
      </Head>

      <h1>Catch all routes [...slug]</h1>
      <Nav
        borderBottom={'1px solid #000'}
        linkPadding={'1rem 1rem 1rem .3rem'}
        linkColor={'#000'}
        linkFontSize={'1.3rem'}
        aria-label='catch all routes'
      >
      <Navigation
        links={linksPostSlug}
        isMain={false}
      />
      </Nav>
    </>
  )
}

export default PostPage