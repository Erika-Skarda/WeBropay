import React from 'react';
import { Footer } from './styled';
import moment from 'moment';

function FooterComponent(props) {

  const today = new Date();
  const day = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()
  const min = `${day}/0${month}/${year}`
  let now = (moment().format('h:mm'))
  
  return(

    <Footer>
       <p>{min}  {now}</p><p>Webro pay  2020</p>
    </Footer>
 
  )
}

export default FooterComponent;