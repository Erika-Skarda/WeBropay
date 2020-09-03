import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styled, { css } from 'styled-components';
import { withStyles} from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
  

export const StyledTableCell = withStyles((theme) => ({
  head: {
    
    color: "#516373",
    fontSize:"1.3rem",
  
  },
    body: {
     
    },
  }))(TableCell);
  
  
export const StyledTableRow = styled(TableRow) `
  
  &:nth-of-type(odd) {
    
    background-color: #E5E5E5;
    
  }
  &&:nth-of-type(even) {
    color: #666666
  }
  
  `
export const StyledTableCell2 = styled(TableCell) `
  
  && {
    color:inherit;
    font-weight: 500;
    font-size: 1rem;
    width:${(props) => props.width};
    
  } 
  
`
export const StyledTable = withStyles((theme) => ({
  root: {
    width: "70%",
    display: "table",
    marginTop: "35px",
    border: "1px solid #E5E5E5",
  },
  body : {
    height: "70vh",
    width: "92%",
    zindex: "1",
    position: "absolute",
    left: "23vw",
    bottom: "7vh"
  }
  
}))(Table)
const iconCSS = css`
    width: 31px;
    height: 31px;
`
export const PencilnIcon = styled(CreateIcon)`
    ${iconCSS};

    
`