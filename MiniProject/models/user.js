const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: Number,
    password: String,

    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post",
        default: []   
    }
});

module.exports = mongoose.model("User", userSchema);
