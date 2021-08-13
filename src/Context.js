import React, { createContext, useState } from "react";

export const AppProvider = (props) => {
  const { Provider } = AppContext;

  const [searchData, setSearchData] = useState([]);

  return (
    <Provider value={[searchData, setSearchData]}>{props.children}</Provider>
  );
};

export const AppContext = createContext();
