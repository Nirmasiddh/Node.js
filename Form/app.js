const express = require('express');
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const User = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/form");

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get('/', function(req, res){
    res.render('index');
})


app.post('/submit', async function(req, res){
    const {name, email,age} = req.body;
   const user = await User.create({name,email,age});
   console.log(user);
    res.send("Form submitted successfully!");
})


app.listen(3000);