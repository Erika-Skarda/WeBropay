import axios from 'axios'
// import { routes } from "../../src/Containers/Router/index";
import { baseUrl } from "../Utils/constants"

export const setAllContracts = (contracts) => ({
  type: "SET_ALL_CONTRACTS",
  payload: {
      contracts
  }
})
export const setSelectedContract = (id) =>({

  type: 'SET_SELECTED_CONTRACT',
  payload: {
      id
  }
});
export const addContract = (description, status) => async (dispatch) => {
  try {
    const body = {
      description,
      status: status === "Contrato aberto" ? true : false
    };
    await axios.post(`${baseUrl}/contract`, body)
  
    //  dispatch(getContract())
  }
  catch (err) {

  alert("Ocorreu um erro inesperado. Tente novamente")
 
  }
};
export const getAllContracts = (page) => async (dispatch) => {
  try {
    
    const response = await axios.get(`${baseUrl}/contract`)  
    dispatch(setAllContracts(response.data))
   console.log(response.data)
  } catch (err) {
    
  console.log("Algo errado não está certo!")
  }
}
export const updateContract = (id) => async (dispatch) => {
  try {
    
    await axios.put(`${baseUrl}/contract/${id}`)

  } catch (err) {

    console.err("Algo errado não está certo!")
  }
}