import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.module.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
