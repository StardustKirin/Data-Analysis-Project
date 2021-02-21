const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3000; //allow environment variable to possible set PORT
let app = express();



//Mongo created database
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Data_Analysis_Models";
var db;
var dbo;


//create the mongo database
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db("Data_Models_Analysis");

    app.use(express.urlencoded({ extended: true }));
    //app.use(express.static("public"))

    app.set("view engine", 'html');
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/ModelPage.html'))
    });

    //start server
    app.listen(3000);
    console.log("Server listening on port 3000");
});

