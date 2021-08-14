import React, { useContext } from "react";
import { AppContext } from "../Context";

export default function Book(props) {
  const { BGImg, title, author, shelf, searchResultBook, book } = props;

  const { searchDataCTX, myBooksCTX } = useContext(AppContext);
  const [searchData, setSearchData] = searchDataCTX;
  const [myBooks, setMyBooks] = myBooksCTX;

  const handleChange = (e) => {
    //to add new book from search results
    if (searchResultBook) {
      let newBook = {
        title: searchResultBook.title,
        bgimg: searchResultBook.imageLinks?.thumbnail,
        author: book?.authors,
        shelf: e.target.value,
      };
      console.log(newBook);
      setMyBooks([...myBooks, newBook]);

      console.log("NEW BOOK");
      console.log(myBooks);
    } else {
      book.shelf = e.target.value;
      setMyBooks([...myBooks], [book]);
      console.log("SHELF ELSE");
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
              backgroundImage: `url(${BGImg})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              className="select-css"
              value={shelf}
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
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
}
