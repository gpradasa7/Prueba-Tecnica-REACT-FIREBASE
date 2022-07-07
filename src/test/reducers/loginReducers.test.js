import "@testing-library/jest-dom";
import { loginReducers } from "../../redux/reducers/loginReducer";
import { typesLogin } from "../../redux/types/types";

describe("Pruebas en LoginReducer", () => {
  test("verifica si esta login", () => {
    const initState = {
      correo: "yo@gmail.com",
      password: "12345678",
    };
    const action = {
      type: typesLogin.login,
    };
    const state = loginReducers(initState, action);
    expect(state).toEqual({
      ...state,
    });
  });
});

test("verifica si esta logout", () => {
  const initState = {};
  const action = {};
  const state = loginReducers(initState, action);
  expect(state).toEqual({ initState });
});
