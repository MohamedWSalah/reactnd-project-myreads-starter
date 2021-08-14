import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Book from "./components/Book";
import { AppContext } from "./Context";

export default function MainPage() {
  const { searchDataCTX, myBooksCTX } = useContext(AppContext);
  const [searchData, setSearchData] = searchDataCTX;
  const [myBooks, setMyBooks] = myBooksCTX;
  return (
    <div className="list-books">
      <button onClick={() => console.log(myBooks)}>SSS</button>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {myBooks
                  .filter((book) => book.shelf === "Currently Reading")
                  .map((book) => (
                    <Book
                      key={book.title}
                      BGImg={book.bgimg}
                      title={book.title}
                      author={book.authors}
                      shelf={book.shelf}
                      book={book}
                    ></Book>
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {myBooks
                  .filter((book) => book.shelf === "Want to Read")
                  .map((book) => (
                    <Book
                      key={book.title}
                      BGImg={book.bgimg}
                      title={book.title}
                      author={book.authors}
                      shelf={book.shelf}
                      book={book}
                    ></Book>
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {myBooks
                  .filter((book) => book.shelf === "Read")
                  .map((book) => (
                    <Book
                      key={book.title}
                      BGImg={book.bgimg}
                      title={book.title}
                      author={book.authors}
                      shelf={book.shelf}
                      book={book}
                    ></Book>
                  ))}
              </ol>
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
