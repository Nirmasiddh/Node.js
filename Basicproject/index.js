// const e = require("express");
const express = require("express");
const Path = require("path");
const fs = require('fs');




const app = express();

app.use(express.json());
app.use(express.urlencoded((extended=true)));

// setting up public static files
app.use(express.static(Path.join(__dirname, "public")));

// ejs engine setup
app.set("view engine", "ejs");

app.get("/", function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render("index",{files: files});
    })
})

app.get("/file/:filename", function(req, res){
    fs.readFile(`./files/${req.params.filename}`, 'utf-8' ,function(err, filedata){
        res.render('show',{filename: req.params.filename, filedata:filedata});
    })
})

app.get("/edit/:filename", function(req, res){
    res.render('edit',{filename: req.params.filename});
})

app.post("/edit/:filename", function(req, res){
    const oldName = req.params.filename;        // old filename from URL
    const newName = req.body.new + ".txt";      // user input + extension

    fs.rename(`./files/${oldName}`, `./files/${newName}`, function(err){
        if (err) {
            console.log("Rename error:", err);
        }
        res.redirect("/");
    });
});


app.post("/create", function(req, res){
   fs.writeFile(`./files/${ req.body.title.split(' ').join('')}.txt`, req.body.details , function(err){
        res.redirect("/");
   });
})


app.listen(3000);