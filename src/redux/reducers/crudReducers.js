//-------------------GET----------------------------//

import { typesCRUD } from "../types/types";

const initialState = {
  crud: [],
};
const crudReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesCRUD.get:
      return {
        crud: [...action.payload],
      };

    case typesCRUD.post:
      return {
        crud: [...state.crud, action.payload],
      };
    case typesCRUD.put:
      return {
        ...state,
      };
    case typesCRUD.delete:
      return {
        crud: state.crud.filter(c => c.id !== action.payload),
      };

    default:
      return state;
  }
};

export default crudReducers;
