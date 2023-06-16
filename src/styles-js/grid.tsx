import styled from "@emotion/styled"
import { RowProps, ColumnProps } from '../styles-types/grid'

export const Column = styled('div')<ColumnProps>`
  display: ${props => props.display};
  width: ${props => props.width};
  background-color: ${props => props.bgColor};
`
export const Row = styled('div')<RowProps>`
  width: ${props => props.width};
  background-color: ${props => props.bgColor};
`
