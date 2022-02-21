import React from "react";
import ReactDOM from "react-dom";
import "@reach/combobox/styles.css";
import "./index.css";
import App from "./app";
import { Provider } from "react-redux";
import store from "./app/store";
import { LocatorProvider } from "./app/components/LocatorProvider/LocatorProvider";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocatorProvider>
        <App />
      </LocatorProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
