import styled from 'styled-components'
import { theme } from "../../../Styles/globals";

export const Div = styled.div `
  height: 8px;
  background-color: ${theme.darkBlue};
  width:100%;
`
export const Container = styled.div`

  margin:0 30px;

`
export const Title = styled.div`

  display: flex;  
  flex-direction: row;
  padding:20px 0 0 0;

    h1 {
        top: 204px;
        left: 96px;
        font-size:1.3rem;
        text-align: left;
        letter-spacing: 0px;
        color: ${theme.darkBlue};
        text-shadow: 0px 3px 6px #00000029;
        text-transform: uppercase;
        opacity: 1;
        margin-right:20px;
        margin-top: 10px;
        font-size: x-large;
    }
    
`
export const ContainerAddContract = styled.div`
  margin: 0 auto;
  background: ${theme.darkBlue};
  padding: 15px ;
  border-radius: 15px;
  margin-bottom: 10px;
 
  form {
    display: flex;
    gap: 10px;
    
      @media screen and (max-width: 1100px) {
          display: flex;
          flex-direction: column;
          align-items: center;
      }
  }
   input, select {

    @media screen and (max-width: 1100px) {
       height: 30px;
    }
  }

  button {
    display: flex;  
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color:${theme.background};
    color: ${theme.darkBlue};
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

   
@media screen and (max-width: 1100px) {
  height: 30px;
}
  }
`

