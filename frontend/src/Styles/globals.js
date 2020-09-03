import { createGlobalStyle } from "styled-components";

export const theme = {
  darkBlue: "#122659",
  lightBlue: "#5C9EFF",
  header:"#FAFAFA",
  background: "#FFFFFF",
  bege: "#00000029"
};

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin : 0;
    box-sizing: border-box;
    font-size: 16px;
  } 
  button {
    cursor: pointer;
  }
  body {
     background: ${theme.background};
     font-family:'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
  };
`;