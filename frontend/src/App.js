import React from "react";
import { Provider } from "react-redux";
import Router from "../src/Containers/Router";
import { store, history } from './Store';
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { GlobalStyle, theme } from "./Styles/globals";

const App = () => (

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Router history={history} />    
    </ThemeProvider>
  </Provider>
  
);

export default App;