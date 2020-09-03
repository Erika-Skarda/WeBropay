const initialState = {
  allContracts: [],
  id: undefined,
 
}

const contract = (state = initialState, action) => {

  switch (action.type) {
      case "SET_ALL_CONTRACTS":
          return {
              ...state,
              allContracts: action.payload.contracts
          }
      case "SET_SELECTED_ID":
          return {
              ...state,
              id: action.payload.id
          };
      default:
          return state;
  }
}

export default contract;