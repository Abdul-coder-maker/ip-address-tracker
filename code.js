const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  fetch(`https://ipapi.co/json`)
    .then((res) => res.json())
    .then((data) => {
      res.json(data); 
    });
});
app.get('/mapApi/', (req, res) => { 

})
app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
