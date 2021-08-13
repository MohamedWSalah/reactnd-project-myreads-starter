import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { AppContext } from "../Context";

export default function Search() {
  const [searchData, setSearchData] = useContext(AppContext);
  console.log(searchData);

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
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
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
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
