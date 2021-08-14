import React, { useReact } from "react";
import { Link } from "react-router-dom";
import { myBooks } from "./myBooks";
import Book from "./components/Book";
export default function MainPage() {
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
                {myBooks
                  .filter((book) => book.shelf === "Currently Reading")
                  .map((book) => (
                    <Book
                      key={book.title}
                      BGImg={book.bgimg}
                      title={book.title}
                      author={book.authors}
                      shelf={book.shelf}
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
