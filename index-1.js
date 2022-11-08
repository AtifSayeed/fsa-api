const express = require("express");
const homeRouter = require('./Router/ProductRouter');
const app = express();
const PORT = 3000;

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`));


//routing

app.use('/',homeRouter);

app.use('/books',homeRouter);
