import styled from "@emotion/styled"
import { HeaderProps, NavigationProps } from "../styles-types/layout"

export const HeaderSt = styled.header<HeaderProps>`
  display:  ${props => props.display};
  padding:  ${props => props.padding};
  background-color: ${props => props.bgColor};
`
export const Nav = styled.nav<NavigationProps>`
  ul {
    display: inline-block;
    margin: 0;
    padding-inline-start: 0;
    
    li {
      display:  ${props => props.navDisplay};
      margin: 0;
      border-bottom: ${props => props.borderBottom};
      background-color: ${props => props.bgColor};
      padding: 0;

      a {
        display: inline-block;
        padding: ${props => props.linkPadding};
        color: ${props => props.linkColor};
        text-decoration: none;
        font-size: ${props => props.linkFontSize};

        &:hover {
          text-decoration: underline;
        }
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`
