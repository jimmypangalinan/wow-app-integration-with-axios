import { createContext, useReducer } from 'react';

// membuat useContext
// proses membuat data menjadi global
export const UserContextModal = createContext();

// menset data awal (default)
const initialState = {
  isLogin: false,
  show: {},
};

// data untuk menghandle logic
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SHOW':
      return {
        isLogin: true,
        show: payload,
      };
    case 'NOT_SHOW':
      return {
        isLogin: false,
        show: {},
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContextModal.Provider value={[state, dispatch]}>{children}</UserContextModal.Provider>;
};
