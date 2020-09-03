import styled from 'styled-components';
import { theme } from "../../../src/Styles/globals";

export const ButtonStyled = styled.button`

  display: flex;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color:${theme.darkBlue};
  color: ${theme.background};
  text-align: center;
  letter-spacing: 1.25px;
  width:141.3px;
  height:43px;
  opacity: 1;
  border-radius:6px;
  font-size:14px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  overflow: hidden;
  transition: color 0.4s ease-in-out;

 :before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${theme.lightBlue};
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

:hover {
  cursor: pointer;
  color: #161616;
}

:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}

  img {
    margin-right:5px;
    margin-top:2px;
  }

`