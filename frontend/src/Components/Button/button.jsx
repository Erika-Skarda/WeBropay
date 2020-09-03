import React from 'react';
import { ButtonStyled } from './styled';
import addIcon from "../../Assets/add.svg";

function ButtonAdd(props) {
  
  return(

    <ButtonStyled onClick={props.click}>
      <img src={addIcon}/> Adicionar
    </ButtonStyled>
 
  )
}

export default ButtonAdd;