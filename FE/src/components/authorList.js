import { deleteBookByIDAPI } from "../api/book"

const ItemAuthor = (props) => {

    const { id, name, biography } = props.author
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{name}</td>
            <td>{biography}</td>
            <td>
                <button onClick={() => props.deleteBook(id)}>Delete</button>
                <button onClick={() => props.editBook(props.book)}>Edit</button>
            </td>
        </tr>
    )
}
export default ItemUser