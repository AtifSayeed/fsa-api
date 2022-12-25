const path = require("path");

function home(req, res) {
  const filePath = path.resolve(__dirname, "index.html");
  res.status(200);
  res.send("Hello Expressoo");
}

function books(req, res) {
  const books = [
    { id: 1, name: "Cleaning", price: 100 },
    { id: 2, name: "Cleadfxcg", price: 100 },
    { id: 3, name: "Clevdsaning", price: 100 },
  ];
  res.json(books);
}
module.exports = {
  home: home,
  books: books,
};
