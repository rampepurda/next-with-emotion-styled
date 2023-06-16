import { NextPage } from "next"
import Head from "next/head"
import { Button, Row } from "../styles-js"


const EmotionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Emotion Page - here you can see much more abut emotion js-css</title>
      </Head>

      <h1>Emotion Page - here you can see much more abut emotion js-css</h1>
      <Row width={'100%'} bgColor={'#05709b'}>That is 'ROW', width: 100%, bgColor is blue</Row>
      <Row>
        <h2>BTNS inside 'ROW'</h2>
        <Button>Im Not Primary</Button>
        <Button primary={true}>Im Primary</Button>
      </Row>
    </>
  )
}

export default EmotionPage