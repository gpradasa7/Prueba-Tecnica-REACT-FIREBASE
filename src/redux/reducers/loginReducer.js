import { typesLogin } from "../types/types";

export const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case typesLogin.login:
      return {
        email: action.payload.email,
        password: action.payload.password,
        error: action.payload.error,
      };
    case typesLogin.loginError:
      return {
        ...state,
        error: action.payload.error,
      };

    case typesLogin.authenticated:
      return {
        ...state,
        authenticated: true,
      };
    case typesLogin.updateUserInfo:
      return {
        ...state,
        ...action.payload,
      };
    case typesLogin.logout:
      return {};
    default:
      return state;
  }
};
