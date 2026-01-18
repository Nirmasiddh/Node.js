const express = require('express');
const app = express();
const userModel = require('./models/user.js');
const postModel = require('./models/post.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const path = require('path');
//const { Hash } = require('crypto');
const jwt = require("jsonwebtoken");



app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.get('/', function(req,res){
    res.render('index.ejs')
})

app.get('/login',  function(req,res){
    res.render('login')
})

app.get('/profile', isLoggedIn,  function(req,res){
    console.log(req.user);
    res.render("login");

})

app.post('/register', async function(req,res){

    let {username, name, age, email, password} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User already exists");

     bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, async (err, hash) => {
            
          let user =  await userModel.create({
                username,
                email,
                age,
                name,
                password:hash
            });

           let token = jwt.sign({email:email, userid: user._id}, 'shhhh');
           res.cookie("token", token);
           res.send("Registered");
        } )
     })
    
});

app.post('/login', async function(req,res){

    let { email, password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.status(500).send("Something went wrong");

     bcrypt.compare(password, user.password, function(err, result){
        if(result) {
            let token = jwt.sign({email:email, userid: user._id}, 'shhhh');
            res.cookie("token", token);
            res.status(200).send("You can login");
            
        }
        else res.redirect("/login");
     }  )
    
});

app.get('/logout', function(req,res){
    res.cookie("token", "");
    res.redirect('/login');
})

function isLoggedIn(req, res, next){
    if(req.cookies.token === "") res.send("You Must be Logged in");
    else{
       let data = jwt.verify(req.cookies.token, "shhhh");
        req.user = data ;
        next();
    }
    
}

app.listen(3000);