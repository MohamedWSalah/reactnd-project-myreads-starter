import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { AppContext } from "../Context";

export default function Search() {
  const { searchDataCTX, myBooksCTX } = useContext(AppContext);
  const [searchData, setSearchData] = searchDataCTX;
  const [myBooks, setMyBooks] = myBooksCTX;

  console.log(searchData);
  console.log(myBooks);

  const [searchError, setSearchError] = useState(false);
  const [loading, setLoading] = useState(false);

  const SearchUpdate = (searchText) => {
    searchText.length !== 0
      ? BooksAPI.search(searchText)
          .then(setLoading(true))
          .then((response) => {
            setLoading(false);
            response.error
              ? setSearchError(true)
              : setSearchData(response) || setSearchError(false);
          })
          .catch((er) => console.log(er))
      : setSearchError(false) || setSearchData([]) || setSearchError(false);
  };

  //Function to render already existing books from myBooks instead of the API
  const ExistedBook = (book, key) => {
    var bookIndex = myBooks.findIndex((i) => book.title === i.title);
    console.log("INCLUDED", bookIndex, " asda ", myBooks[bookIndex]);
    return (
      <Book
        key={myBooks[bookIndex].title}
        BGImg={myBooks[bookIndex]?.bgimg}
        title={myBooks[bookIndex].title}
        author={myBooks[bookIndex]?.authors}
        shelf={myBooks[bookIndex]?.shelf}
        book={myBooks[bookIndex]}
      />
    );
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={() => setSearchData([])}>
          My Books
        </Link>
        <button onClick={() => console.log(myBooks)}>SSS</button>
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
        {searchError ? (
          <h2 style={{ textAlign: "center" }}>
            Your search keyword isnt available, can you try again ?
          </h2>
        ) : null}
        {loading ? <div className="loading"></div> : null}
        <ol className="books-grid">
          {searchData?.map((book) =>
            myBooks.some((b) => b.title === book.title) ? (
              ExistedBook(book)
            ) : (
              <Book
                key={book.title}
                BGImg={book?.imageLinks?.thumbnail}
                title={book?.title}
                author={book?.authors}
                searchResultBook={book}
              />
            )
          )}
        </ol>
      </div>
    </div>
  );
}
