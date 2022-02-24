fs = require("fs");
fs.readFile(
  "D:\\HTL\\4cWI\\SWP\\Beispiele\\Javascript_Extended\\02\\script.js",
  "utf8",
  function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  }
);
