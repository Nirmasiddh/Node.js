const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

// schema that defines the structure of the document

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email : String
})

// create a model

module.exports = mongoose.model("user", userSchema);
