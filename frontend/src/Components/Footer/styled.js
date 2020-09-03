import styled from 'styled-components'
import { theme } from '../../../src/Styles/globals';

export const Footer = styled.footer`

  height:60px;
  background-color: ${theme.darkBlue};
  width:100%;
  margin-bottom:0px;
  position: relative;
  top:4.7vh;
  padding:20px;
  display:flex;
  flex-direction:row;
  justify-content: space-between;

  p {

    color: ${theme.background};
    font-size:16px;
  }
`

