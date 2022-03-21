import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { UserContextTokenProvider } from "./context/useContext";
import { UserContextModalProvider } from "./context/useContextModal";

ReactDOM.render(
  <React.StrictMode>
    <UserContextModalProvider>
      <UserContextTokenProvider>
        <Router>
          <App />
        </Router>
      </UserContextTokenProvider>
    </UserContextModalProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
