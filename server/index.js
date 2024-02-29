const express = require('express');
const app = express();
const PORT = 8000;
const cors = require("cors");

const todoRoute = require('./routes/todo');

app.use(express.json());

app.use(cors());

app.use('/todo', todoRoute);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})