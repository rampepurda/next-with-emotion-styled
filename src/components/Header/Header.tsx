import Link from 'next/link'
import { linksHeader } from "../../configuration/common"
import { Button, Row, HeaderSt } from "../../styles-js"

type InitValue = {
  asLink?: string
  pathName: string,
  title: string,
}

export const Header = () => {
  return (
    <HeaderSt bgColor={'#05709BFF'} padding={'1rem'}>
      <Row width={'300px'} color={'#05709b'}>That is 'ROW'</Row>
      <Row>
        <h2>BTNS</h2>
        <Button>Im Not Primary</Button>
        <Button primary={true}>Im Primary</Button>
      </Row>
    </HeaderSt >
  )
}

