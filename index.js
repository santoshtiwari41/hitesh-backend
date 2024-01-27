require('dotenv').config()

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello santosh tiwari");
});
app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
