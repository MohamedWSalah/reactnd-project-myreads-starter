import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Book from "./components/Book";
import { AppContext } from "./Context";

export default function MainPage() {
  const { myBooksCTX } = useContext(AppContext);
  const [myBooks] = myBooksCTX;

  const BooksRendering = (shelf) => {
    if (myBooks.length === 0) return <div className="loading"></div>;
    else
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
                {BooksRendering("currentlyReading")}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">{BooksRendering("wantToRead")}</ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">{BooksRendering("read")}</ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link className="open-search-link" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
}
