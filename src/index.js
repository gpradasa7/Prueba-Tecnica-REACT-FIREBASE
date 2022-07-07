import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import reportWebVitals from "./reportWebVitals";
import AppRoutes from "./routers/AppRoutes";
import "./styles/globalStyles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div>
      <AppRoutes />
    </div>
  </Provider>
);

reportWebVitals();
