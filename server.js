const express = require("express");
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  setTimeout(() => res.sendStatus(200), 10000);
})

app.listen(3000, () => console.log("listening..."));
