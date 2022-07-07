import "@testing-library/jest-dom";
import { typesLogin, typesRegister } from "../../redux/types/types";

describe("Verificar typesLogin", () => {
  test("comparar objetos", () => {
    expect(typesLogin).toEqual({
      login: "login",
      logout: "logout",
      register: "register",
    });
  });
});

describe("Verificar typesPlantas", () => {
  test("comparar objetos", () => {
    expect(typesRegister).toEqual({
      register: "[Register-Usuario] register",
    });
  });
});

test("comparar objetos", () => {
  expect(typesLogin).not.toContain({
    add: "add",
    list: "list",
    edit: "edit",
    delete: "delete",
  });
});

test("comparar objetos que no contenga", () => {
  expect(typesRegister).not.toContain({
    add: "add",
    list: "list",
    edit: "edit",
    delete: "delete",
  });
});
