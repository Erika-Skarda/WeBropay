import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as contractAction from "../../../Actions/contractActions";
//Componentes
import CustomizedTablesClients from '../../../Components/Table'
import ButtonAdd from "../../../Components/Button";
import FooterComponent from "../../../Components/Footer";
//Estilização
import { Container,
         Div, 
         Title,
         ContainerAddContract } from './styled';

const contracts = [

   "Contrato aberto",
   "Contrato distrato",
];
class Page extends Component {
  state = {
    buttonToAdd: false,
    form: {
      inputContract: "",
      contract: "Contrato aberto" ? true : false
    }
  };

  onClickButton = () => {

    this.setState({ buttonToAdd: !this.state.buttonToAdd })           
 }

//  handleInputChange = (e) => {
//   const { name, value } = e.target;
//   this.setState({
//     form: { ...this.state.form, [name]: value },
//   });
// };
handleSelectedContract = (e) => {
  this.setState({
    form: { ...this.state.form, contract: e.target.value },
  });
  console.log(e.target.value)
};
handleInputChange = (e) => {
  this.setState({ 
    form: { ...this.state.form, inputContract: e.target.value },
  });
  console.log(e.target.value)
}
handleFormSubmit = (e) => {
  e.preventDefault();
  const { inputContract, contract } = this.state.form

  this.props.addContract(
    inputContract, 
     contract
  )
};

  render() {

    return(
      <>
        <img 
          src={require("../../../Assets/logo webropay.png")}
          alt="Logo da webropay"
          style={{padding:"25px"}}
          />
        <Div></Div>
        
      <Container>
        <Title>
          <h1>Contratos</h1>
          <ButtonAdd click={this.onClickButton}/>
          {this.state.buttonToAdd && (
            <ContainerAddContract>
              <form onSubmit={this.handleFormSubmit}>
                <input 
                  type="text" 
                  name = "description"
                  placeholder="  Descreva o contrato" 
                  onChange={this.handleInputChange}
                  value={this.state.form.inputContract}
                  required
                  style={{marginLeft:"10px"}}
                />
                <select required onChange={this.handleSelectedContract}>
                  <option>
                      -- Selecione o tipo de contrato --
                  </option>
                  {contracts.map((contract, index) => {
                   return (
                    <option value={contract} key={index}>
                      {contract}
                    </option>
                    );
                  })}
                </select>
                <button type="submit">Adicionar</button>
              </form>
            </ContainerAddContract>
          )} 
        </Title>
        
        <CustomizedTablesClients/>
      </Container>
        <FooterComponent />
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
   
 
  };
}
const mapDispatchToProps = (dispatch) => 
    bindActionCreators(contractAction,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Page)
