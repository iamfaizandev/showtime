var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var datatbase = clientObj.db("netflixClone");
    datatbase
      .collection("users")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});
app.post("/registeruser", (req, res) => {
  var user = {
    Email: req.body.Email,
    Password: req.body.Password,
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("netflixClone");
    database
      .collection("users")
      .insertOne(user)
      .then(() => {
        console.log("User Added");
        // res.redirect("/users");
        res.end();
      });
  });
});
app.listen(2024);
console.log(`Server Started : http://127.0.0.1:2024`);
