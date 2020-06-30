const express = require("express");
const axios = require('axios');
const app = express();
const paymentAPIUrl = 'http://server:3000';

app.use(express.json());


app.get('/', function (req, res) {
  res.sendStatus(202);
  setTimeout(() => {
    axios.put(`${paymentAPIUrl}/transactions/${req.body.transactionId}/confirm`);
  }, 10000);
})

app.listen(3000, () => console.log("listening..."));
