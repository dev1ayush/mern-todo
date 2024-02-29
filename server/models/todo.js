const { Mongoose, default: mongoose } = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo")
    .then(() => console.log("mongodb is connected"));

const todoSchema = new mongoose.Schema({
    id: String,
    content: String
})

const model = mongoose.model('todo', todoSchema);

module.exports = model;