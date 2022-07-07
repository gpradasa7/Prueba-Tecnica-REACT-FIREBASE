import { typesRegister } from "../types/types";

export const registerReducers = (state = {}, action) => {
  switch (action.type) {
    case typesRegister.register:
      return {
        id: action.payload.id,
        fullname: action.payload.fullname,
        email: action.payload.email,
        password: action.payload.password,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
