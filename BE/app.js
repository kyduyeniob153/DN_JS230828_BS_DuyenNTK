const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const {
  addBook,
  editBookById,
  getAllBook,
} = require("./src/controller/books-controller");
const { getAllAuthors } = require("./src/controller/Authors-controller");
const port = 8081;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.get("/api/v1/books", (req, res) => {
  const book = getAllBook();
  book.then((results) => {
    res.status(200).json(results);
  });
});

app.post("/api/v1/book", (req, res) => {
  const dataRequest = req.body;
  const book = addBook(dataRequest);
  architect.then((response) => {
    res.status(200).json(response);
  });
});

app.put("/api/v1/book/:id", (req, res) => {
  const dataRequest = req.body;
  const book = editBookById(dataRequest);
  book.then((response) => {
    res.status(550).json(response);
  });
});

app.delete("/api/v1/book/:id", (req, res) => {
  const result = deleteBookById(req.params.id);

  result.then((response) => {
    res.status(200).json(response);
  });
});

app.post("/api/v1/author", (req, res) => {
  const dataRequest = req.body;
  const book = addAuthor(dataRequest);
  architect.then((response) => {
    res.status(200).json(response);
  });
});

// app.get("/api/v1/author/:id/books",(req, res) => {
//     const result = getBookById();
//     book.then((results) => {
//         res.status(200).json(results)
//     });
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
