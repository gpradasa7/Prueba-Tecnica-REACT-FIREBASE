import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import crudReducers from "../reducers/crudReducers";
import { loginReducers } from "../reducers/loginReducer";
import pedidosReducers from "../reducers/pedidosReducers";
import { registerReducers } from "../reducers/registerReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  loginStore: loginReducers,
  registerStore: registerReducers,
  crudStore: crudReducers,
  pedidosStore: pedidosReducers,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
