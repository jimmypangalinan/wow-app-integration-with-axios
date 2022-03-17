import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { UserContextProvider } from "./context/userContextModal";
import { UserContextSubscribes } from "./context/userContextSubscribe";
import { UserContextMyList } from "./context/dataAddMyList";
import { DataUserContextProvider } from "./context/dataUserLogin";
import { UserContextTokenProvider } from "./context/useContextToken";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <UserContextSubscribes>
        <UserContextMyList>
          <DataUserContextProvider>
            <UserContextTokenProvider>
              <App />
            </UserContextTokenProvider>
          </DataUserContextProvider>
        </UserContextMyList>
      </UserContextSubscribes>
    </UserContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
