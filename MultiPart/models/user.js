const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/miniproject");

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: Number,
    password: String,
    profilepic: {
        type: String,
        default: "default.webp"
    },

    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post",
        default: []   
    }
});

module.exports = mongoose.model("User", userSchema);
