import { createContext, useReducer } from 'react';

// membuat useContext
// proses membuat data menjadi global
export const UserContextSubscribe = createContext();

// menset data awal (default)
const initialState = {
  isSubs: false,
};

// data untuk menghandle logic
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SUBSCRIBE':
      return {
        isSubs: payload,
      };
    case 'NOT_SUBSCRIBE':
      return {
        isSubs: false,
      };
    default:
      throw new Error();
  }
};

export const UserContextSubscribes = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContextSubscribe.Provider value={[state, dispatch]}>{children}</UserContextSubscribe.Provider>;
};
