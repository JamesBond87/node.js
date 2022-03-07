const express = require("express");
const app = express();


app.use(express.static("public"));
//app.use('/css',express.static(__dirname +'/css'));
//app.use(express.static(__dirname + '/public'));


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/frontpage.html");
});

app.get("/nodeJS", (req,res) => {
    res.sendFile(__dirname + "/public/pages/nodeJS/nodejs.html");
});

app.get("/express", (req,res) => {
    res.sendFile(__dirname + "/public/pages/express/express.html");
});

app.get("/heroku", (req,res) => {
    res.sendFile(__dirname + "/public/pages/heroku/heroku.html");
});

app.get("/nodemon", (req,res) => {
    res.sendFile(__dirname + "/public/pages/nodemon/nodemon.html");
});

app.get("/npm", (req,res) => {
    res.sendFile(__dirname + "/public/pages/npm/npm.html");
});

app.get("/ssr", (req,res) => {
    res.sendFile(__dirname + "/public/pages/ssr/ssr.html");
});


app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});