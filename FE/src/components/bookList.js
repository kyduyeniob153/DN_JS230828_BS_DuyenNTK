import { deleteBookByIDAPI } from "../api/book";

const ItemBook = (props) => {
  const { id, name, desciption, price, created_at, updated_at } = props.book;
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{created_at}</td>
      <td>{updated_at}</td>
      <td>
        <button onClick={() => props.deleteBook(id)}>Delete</button>
        <button onClick={() => props.editBook(props.book)}>Edit</button>
      </td>
    </tr>
  );
};
export default ItemBook;
