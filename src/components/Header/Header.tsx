import { HeaderSt } from "../../styles-js"
import { PropsWithChildren } from "react"

export const Header = ({ children}: PropsWithChildren) => {
  return (
    <HeaderSt
      bgColor={'#05709BFF'}
      padding={'1rem'}
    >
      {children}
    </HeaderSt >
  )
}

