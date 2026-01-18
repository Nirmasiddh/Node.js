const cookieParser = require('cookie-parser');
const express = require('express');
const userModel = require('./models/user.js');
const becrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const path = require('path');
const { hash } = require('crypto');
const user = require('./models/user.js');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.post('/create', function(req, res){
    let {username, email, password, age} = req.body;

    becrypt.genSalt(10, function(err, salt){

       becrypt.hash(password, salt, async(err, hash) => {
            
        let createdUser = await userModel.create({
        username,
        email,
        password:hash,
        age
    })

       let token =  jwt.sign({email}, "secretkey");
       res.cookie('token', token);
       res.send(createdUser);

        })
    })

}) ;

app.get("/login", function(req,res){
    res.render('login.ejs');
})

app.post("/login", async function(req,res){
   let user = await userModel.findOne({email:req.body.email}) ;
   
   if(!user) return res.send("something went wrong");
   //console.log(user);
    
    becrypt.compare(req.body.password, user.password, function(err, result){

        let token =  jwt.sign({email:user.email}, "secretkey");
        res.cookie('token', token);

        res.send(result ?"Yes You can login" : "You can't Login");
    })
})


app.get('/logout', function(req,res){
    res.cookie('token', "");
    res.redirect('/');
})

app.listen(3000);