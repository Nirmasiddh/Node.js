 
 const path = require('path');
 const express = require('express');
 const app = express();
 const userModel = require('./models/user.js');
 const postModel = require('./models/post.js');
const user = require('./models/user.js');
 

 app.get('/', function(req, res){
    res.send("Hey My self Nirma");
 });

 app.get('/create', async function(req, res){
       let user = await userModel.create({
        username: "Nirma",
        age: 20,
        email: "nirma@example.com"
       })

       res.send(user);
 });

  app.get('/post/create', async function(req, res){
      let post = await postModel.create({
        postdata: "This is my first post",
        user: "6968af96797d832260d24d28"

       })

       let user =  await userModel.findOne({_id: "6968af96797d832260d24d28"});
       user.posts.push(post);
       user.save();
       
       res.send({post, user});
 });

 app.listen(3000);