import { createContext, useReducer } from "react";

// membuat useContext
// proses membuat data menjadi global
export const UserLoginContext = createContext();

// menset data awal (default)
const initialState = {
  isLogin: false,
};

// data untuk menghandle logic
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        isLogin: payload,
      };
    case "NO_LOGIN":
      return {
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const DataUserContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useReducer(reducer, initialState);

  return (
    <UserLoginContext.Provider value={[isLogin, setIsLogin]}>
      {children}
    </UserLoginContext.Provider>
  );
};
