import styled from 'styled-components'

export const Table = styled.table`

  width: ${props => props.width ? props.width : '100%'}
`
export const TableBody = styled.tbody`

`
export const TableHeader = styled.thead`

`
export const TableHeaderColumn = styled.th`
  font-size: 0.8em;
  font-weight:200;
  text-transform:uppercase;
`
export const TableRow = styled.tr`
  &:nth-of-type(odd){
    background:#fdfdfd
  }
`
export const TableRowColumn = styled.td`

`
