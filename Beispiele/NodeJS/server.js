const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const mongo = require("mongodb").MongoClient;
const url = "mongodb://10.115.2.25:27017?directConnection=true";

let db;
console.log("starging server...");
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error("Bling:" + err);
      return;
    } else {
      console.log("found");
    }
    db = client.db("demo");
    console.log("running");
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const students = [
  { id: 1, name: "sebastian" },
  { id: 2, name: "erich" },
  { id: 3, name: "Emanuel" },
];

app.get("/students", (req, res) => {
  db.collection("people")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;

      res.send(result);
    });
});

app.post("/students", (req, res) => {
  const content = req.body;
  students.push(content);
  res.send(content);
});

app.listen(3000, () => console.log("Hello world app listening"));
