const express = require("express");
const bodyParser = require("body-parser");
const shopier = require("./shopier");
const webhook = require("./webhook");

require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ödeme başlat
app.post("/create-order", async (req, res) => {
  const response = await shopier.createOrder(req.body);
  res.send(response);
});

// Webhook dinleyici
app.post("/webhook", webhook.handleWebhook);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




