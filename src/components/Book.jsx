import React, { useContext } from "react";
import { AppContext } from "../Context";

export default function Book(props) {
  const { book, exists } = props;

  const { myBooksCTX } = useContext(AppContext);

  const [myBooks, setMyBooks] = myBooksCTX;

  const handleChange = (e) => {
    //to add new book from search results
    if (!myBooks.some((b) => b.title === book.title)) {
      let newBook = {
        title: book.title,
        imageLinks: { thumbnail: book.imageLinks?.thumbnail },
        authors: book?.authors,
        shelf: e.target.value,
      };
      setMyBooks([...myBooks, newBook]);
      console.log("New book added to mybooks.");
    } else if (e.target.value === "none") {
      setMyBooks(myBooks.filter((b) => b.title !== book.title));
      console.log("Book removed sucessfully");
    } else {
      console.log(book);
      book.shelf = e.target.value;
      setMyBooks([...myBooks], [book]);
      console.log(`Book ${book.title} moved to ${e.target.value} shelf`);
    }
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
              border: exists ? "2px solid red" : null,
            }}
          />
          <div className="book-shelf-changer">
            <select
              className="select-css"
              value={book.shelf || "none"}
              onChange={(e) => handleChange(e)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
}
