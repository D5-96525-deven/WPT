const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho" }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(4001, () => console.log("Server running on 4001"));