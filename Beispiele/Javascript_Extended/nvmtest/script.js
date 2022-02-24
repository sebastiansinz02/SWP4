const sizeOf = require("image-size");

const dimensions = sizeOf(
  "D:\\HTL\\4cWI\\SWP\\Beispiele\\Fussballseite\\Nachwuchs\\U9.jpg"
);
console.log(dimensions.width, dimensions.height);
