import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Book from "./components/Book";
import { AppContext } from "./Context";

export default function MainPage() {
  const { searchDataCTX, myBooksCTX } = useContext(AppContext);
  const [searchData, setSearchData] = searchDataCTX;
  const [myBooks, setMyBooks] = myBooksCTX;

  const BooksRendering = (shelf) => {
    return myBooks
      .filter((book) => book.shelf === shelf)
      .map((book) => <Book key={book.title} book={book}></Book>);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {BooksRendering("Currently Reading")}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">{BooksRendering("Want to Read")}</ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">{BooksRendering("Read")}</ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link className="open-search-link" to="/create">
          Add a book
        </Link>
      </div>
    </div>
  );
}
