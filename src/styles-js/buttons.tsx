import styled from "@emotion/styled"
import { BtnPrimaryProps } from "../styles-types/buttons"

export const Button = styled.button<BtnPrimaryProps>`
  position: relative;
  margin: .2rem .2rem 0 0;
  border: 0;
  background-color: ${props => (props.primary===true ? 'hotpink' : 'turquoise')};
  padding: 1rem 1.3rem;
  color: #fff;

  &::after {
    content: 'H';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: #DC143CFF;
  }
`