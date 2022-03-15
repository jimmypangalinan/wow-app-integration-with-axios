import { createContext, useReducer } from 'react';

export const AddMyListContext = createContext();

const initialState = {
  myList: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'MY_LIST':
      return {
        myList: payload,
      };
    case 'NOT_LIST':
      return {
        myList: [],
      };
    default:
      throw new Error();
  }
};

export const UserContextMyList = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AddMyListContext.Provider value={[state, dispatch]}>{children}</AddMyListContext.Provider>;
};
