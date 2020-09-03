import styled from "styled-components";
import { theme } from "../../../Styles/globals";

export const WrapperSplashScreen = styled.div`
  height:100vh;
  display: flex;
  background-color: ${theme.background  };
  justify-content: center;
  align-items: center;
    img {

      width: 350px;
      height: 200px;

    }
  
`;