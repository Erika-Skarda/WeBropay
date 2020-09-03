import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import contract from "./contract"
import page from "./page"

export const generateReducers = history =>

  combineReducers({
    
    router: connectRouter(history),
    contract,
    page
  
  });