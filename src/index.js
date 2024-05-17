import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // store를 제공하기 위해 사용

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
