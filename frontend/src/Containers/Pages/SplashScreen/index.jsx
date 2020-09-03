import React, { Fragment, useEffect } from 'react';
import { push } from 'connected-react-router';
import { WrapperSplashScreen } from './styled';
import { useHistory } from "react-router-dom";

function SplashScreen() {


  let history = useHistory();

  useEffect(() => {

    setTimeout(() =>  history.push('/home'), 3000);

  }, []);

    return (
      <Fragment>
          <WrapperSplashScreen>
          <img 
           src={require("../../../Assets/logo webropay.png")}
           alt="Logo da webropay"
         />
          </WrapperSplashScreen>
      </Fragment>
    );
  
};

export default SplashScreen