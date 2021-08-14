import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { AppContext } from "../Context";

export default function Search() {
  // const { searchData, setSearchData, myBooks, setMyBooks } =
  //   useContext(AppContext);
  const { searchDataCTX, myBooksCTX } = useContext(AppContext);
  const [searchData, setSearchData] = searchDataCTX;
  const [myBooks, setMyBooks] = myBooksCTX;
  console.log(searchData);
  console.log(myBooks);

  const SearchUpdate = (searchText) => {
    searchText.length !== 0
      ? BooksAPI.search(searchText)
          .then((response) => {
            response.error ? setSearchData([]) : setSearchData(response);
          })
          .catch((er) => console.log(er))
      : setSearchData([]);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Add a book
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => {
              SearchUpdate(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchData?.map((book, key) => (
            <Book
              key={key}
              BGImg={book?.imageLinks?.thumbnail}
              title={book?.title}
              author={book?.authors}
              searchResultBook={book}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
