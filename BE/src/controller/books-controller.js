const connection = require("../config/db-config");

const getAllBook = () => {
  const query = "select * from book";

  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      resolve(results);
    });
  });
  return resultQuery;
};

const getAllBookById = (id) => {
  const query = "select * from book where id = " + id;

  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      resolve(results);
    });
  });
  return resultQuery;
};

// API-3
const addBook = (book) => {
  const { id, name, desciption, price, created_at, updated_at } = book;
  const insertQuery = `INSERT INTO book (id, name, desciption, price, created_at, updated_at) 
                          VALUES ("${id}", "${name}", "${desciption}", "${price}", "${created_at}","${update_at}")`;
  const resultQuery = new Promise((resolve, reject) => {
    connection.query(insertQuery, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
  return resultQuery;
};

//API-5
const editBookById = (id, body) => {
  console.log(body);
  const { name, desciption, price, created_at, updated_at } = body;
  const query = `UPDATE Books
SET name = '${name}', desciption = '${desciption}', price = '${price}', created_at = '${created_at}', updated_at = '${updated_at}'
WHERE id = ${id};`;
  console.log(query);
  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      resolve(results);
    });
  });
  return resultQuery;
};

// API-6
const deleteBookById = (id) => {
  const query = `DELETE FROM Books WHERE id = ${id};`;
  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      resolve(results);
    });
  });
  return resultQuery;
};

module.exports = { getAllBook, addBook, deleteBookById, editBookById };
