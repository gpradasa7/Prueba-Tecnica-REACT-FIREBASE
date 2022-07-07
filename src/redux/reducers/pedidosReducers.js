import { typesCRUD } from "../types/types";

const initialState = {
  pedidos: [],
};

const pedidosReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesCRUD.getPedido:
      return {
        pedidos: [...action.payload],
      };
    default:
      return state;
  }
};

export default pedidosReducers;
