const http = require('http');
const handler = (req, res) => {
    const books = [
    { id: 1, data: "helloWorld" },
    { id: 2, data: "helloWorld" },
    { id: 3, data: "helLloWorld" },
];
  switch (req.url) {
    case '/books':
      res.write(JSON.stringify(books));
      console.log('hey');
      break;
      case '/abc':
      res.write("Not Found");
  }
  res.end();
};
const server = http.createServer(handler);
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
