import styled from "@emotion/styled"
import { HeaderProps } from "../styles-types/layout"
import {BtnPrimaryProps} from "../styles-types/buttons";

export const HeaderSt = styled.header<HeaderProps>`
  display:  ${props => props.display};
  padding:  ${props => props.padding};
  background-color: ${props => props.bgColor};
`
