import axios from "axios";

export const fetchBooksAPI = async () => {
  const response = await axios.get(" http://localhost:8081/api/v1/books");
  return response.data;
};

export const createBookAPI = async (book_add) => {
  const response = await axios.post(
    " http://localhost:8081/api/v1/books",
    book_add
  );
  return response.data;
};
export const editBookByIDrAPI = async (id, book_add) => {
  const response = await axios.put(
    `http://localhost:8081/api/v1/book/${id}`,
    book_add
  );
  return response.data;
};
export const deleteBookByIDAPI = async (id) => {
  const response = await axios.delete(
    `http://localhost:8081/api/v1/book/${id}`
  );
  return response.data;
};
