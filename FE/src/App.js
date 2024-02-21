import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import {
  createBookAPI,
  deleteBookByIDAPI,
  editBookByIDrAPI,
  fetchBooksAPI,
} from "./api/book";
import ItemBook from "./components/bookList";

function App() {
  const idRef = useRef();
  const nameRef = useRef();
  const desciptionRef = useRef();
  const created_atRef = useRef();
  const updated_atRef = useRef();
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const datas = await fetchBooksAPI();
    setBooks(datas);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async () => {
    const name = nameRef.current.value;
    const desciption = desciptionRef.current.value;
    const created_at = created_atRef.current.value;
    const updated_at = updated_atRef.current.value;
    const new_book = {
      name,
      desciption,
      created_at,
      updated_at,
    };
    await createBookAPI(new_book);
    fetchBooks();
  };

  const onClickEdit = (book) => {
    const { id, name, desciption, created_at, updated_at } = book;
    idRef.current = id;
    nameRef.current.value = name;
    desciptionRef.current.value = desciption;
    created_atRef.current.value = created_at;
    updated_atRef.current.value = updated_at;
  };
  const editBook = async () => {
    const book = {
      id: idRef.current,
      name: nameRef.current.value,
      description: desciptionRef.current.value,
      created_at: created_atRef.current.value,
      updated_at: updated_atRef.current.value,
    };
    console.log(book);
    await editBookByIDrAPI(book.id, book);
    fetchBooks();
  };
  const deleteBook = async (id) => {
    await deleteBookByIDAPI(id);
    fetchBooks();
  };
  return (
    <div className="App">
      <div className="ListBook">
        <div>
          <label for="nameBook">name</label>
          <br />
          <input type="text" id="nameBook" name="nameBook" ref={nameRef} />
          <br />
          <label for="descriptionBook">desciption</label>
          <br />
          <input
            type="text"
            id="descriptionBook"
            name="descriptionBook"
            ref={desciptionRef}
          />
          <input type="submit" onClick={addBook} value={"Them Sach"} />
          <input type="submit" onClick={editBook} value={"Sua Sach"} />
        </div>
        <table>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created_at</th>
            <th>Update_at</th>
          </tr>
          {books.map((book, index) => (
            <ItemBook
              index={index}
              book={book}
              deleteBook={deleteBook}
              editBook={onClickEdit}
            />
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
