import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as contractAction from "../../Actions/contractActions";
import * as pageAction from "../../Actions/pageAction";
//Material-ui
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//Estilização
import { StyledTableCell,
         StyledTableRow,
         StyledTableCell2,
         StyledTable,
         PencilnIcon } from './styled';

class CustomizedTablesClients extends Component {

  componentDidMount() {
    this.props.getAllContracts()
    // this.props.setCurrentPage(1)
  }
  render() {

   const {allContracts, updateContract} = this.props;
  
  return (
      <StyledTable aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Contrato</StyledTableCell>
            <StyledTableCell align="left">Descrição</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Edição</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {allContracts.map((row, index) => (
            <StyledTableRow  key={row.index}>
              {(row.id).toString().length === 1 ? 
              (<StyledTableCell2 width="20%" component="th" scope="row">
               CTT-0000000000{row.id} </StyledTableCell2>)
               : (<StyledTableCell2 width="20%" component="th" scope="row">
               CTT-00000000{row.id} </StyledTableCell2>)
              }
              <StyledTableCell2 width="50%" align="left">{row.description}</StyledTableCell2>
              {row.status ? 
                (<StyledTableCell2 width="20%" align="left">Contrato aberto</StyledTableCell2>
              ) : (
                <StyledTableCell2  width="20%" align="left">Contrato distrato</StyledTableCell2>
              )}
              <StyledTableCell2 align="left">
                <PencilnIcon  onClick={() => updateContract(row.id)} />
              </StyledTableCell2>
            </StyledTableRow>
          ))} 
        </TableBody>
      </StyledTable>   
    )
  }
}
const mapStateToProps = state => {
  return {
    allContracts: state.contract.allContracts
  }
}
const mapDispatchToProps = (dispatch) => 
    bindActionCreators(contractAction,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)
(CustomizedTablesClients)