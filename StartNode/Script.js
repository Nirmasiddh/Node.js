const fs = require("fs");


//app.listen(3000, () => {
  //console.log('Server is running on http://localhost:3000');
//});

/* 
fs.appendFile("file.txt", " me to accha hu aap kese ho", function(err){
    if(err) console.error(err);
    else console.log("Done");
})
    

// rename the file name

fs.rename("file.txt", "hello.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
})



// copy the file

fs.copyFile("hello.txt","./copy/copy.txt", function(err){
    if(err) console.error(err.message);
    else console.log("done");
})



// delete the file(unlink the file)

fs.unlink("./copy/copy.txt", function(err){
    if(err) console.error(err.message);
    else console.log("file deleted");
})



// rmdir - remove directory

fs.rmdir("./copy", function(err){
    if(err) console.error(err.message);
    else console.log("directory removed");
})

*/

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req, res, next){
    console.log("middleware called");
    next();
})

app.get("/", function(req, res){
    res.send("hello world");
})

app.get("/about", function(req, res , next){
    return next(new Error("something went wrong in about"));
   // res.send("kese ho aap sab , padhai karte raho ");
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000) ; 