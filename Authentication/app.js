const cookieParser = require('cookie-parser');
const express = require('express');
// const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');
 
const app = express();

app.use(cookieParser());

// passwoed polololololo
// encrpt password $2b$10$/TzI2mgXvJAcV7XtQURbaOn.KEkdSh06JVNFoGDASIkxOUsYa.6uu

app.get('/', function(req, res) {
 let token = jwt.sign({ email: 'nirma@gmail.com' },  'secret');
    res.cookie('token', token);
    res.send('Done');
}) 

app.get('/read' , function(req, res){
   let data = jwt.verify(req.cookies.token, 'secret'); 
   
    console.log(data);
})

app.listen(3000);