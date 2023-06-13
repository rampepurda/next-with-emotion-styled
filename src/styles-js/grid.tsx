import styled from "@emotion/styled"
import { RowProps } from '../styles-types/grid'

export const Row = styled('div')<RowProps>`
  width: ${props => props.width};
  background-color: ${props => props.color};
`
export const Column = styled('div')<RowProps>`
  width: ${props => props.width};
  background-color: ${props => props.color};
`
