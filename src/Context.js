import React, { createContext, useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
export const AppProvider = (props) => {
  const { Provider } = AppContext;

  const [searchData, setSearchData] = useState([]);

  const [myBooks, setMyBooks] = useState([]);
  // useEffect(() => {
  //   if (myBooks !== []) {
  //     localStorage.setItem("myBooks", JSON.stringify(myBooks));
  //   }
  // }, [myBooks]);

  useEffect(() => {
    BooksAPI.getAll().then((response) => setMyBooks(response));
  }, []);

  return (
    <Provider
      value={{
        searchDataCTX: [searchData, setSearchData],
        myBooksCTX: [myBooks, setMyBooks],
      }}
    >
      {props.children}
    </Provider>
  );
};

export const AppContext = createContext();
