const connection = require("../config/db-config");

const getAllAuthors = () => {
    const query = "select * from author";
    
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
          resolve(results);
        });
      });
      return resultQuery;
};

const getAllAuthorsById = (id) => {
    const query = "select * from author where id = " + id;
  
    const resultQuery = new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        resolve(results);
      });
    });
    return resultQuery;
  };

const addAuthor = (author) => {
    const { id, name, biography } = author;
    const insertQuery = `INSERT INTO book (id, name, biography) 
                          VALUES ("${id}", "${name}", "${biography}}")`;
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

 