import { createContext, useReducer } from "react";

// membuat useContext
// proses membuat data menjadi global
export const DataUserLogin = createContext();

// menset data awal (default)
const initialState = {
  userLogin: false,
  user: {},
};

// data untuk menghandle logic
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        userLogin: true,
        user: payload,
      };
    case "NO_LOGIN":
      return {
        userLogin: false,
        user: {},
      };
    default:
      throw new Error();
  }
};

export const DataUserContextProvider = ({ children }) => {
  const [user, setUser] = useReducer(reducer, initialState);

  return (
    <DataUserLogin.Provider value={[user, setUser]}>
      {children}
    </DataUserLogin.Provider>
  );
};
