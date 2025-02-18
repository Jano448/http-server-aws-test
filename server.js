const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD</h1>");
});

app.listen(3000);
console.log("Server running at port 3000");
