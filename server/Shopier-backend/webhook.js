const crypto = require("crypto");

function handleWebhook(req, res) {
  const receivedData = req.body;
  const signature = receivedData.signature;
  delete receivedData.signature;

  const sortedKeys = Object.keys(receivedData).sort();
  let str = "";
  sortedKeys.forEach((key) => {
    str += `${key}=${receivedData[key]}`;
  });

  const calculatedSignature = crypto
    .createHmac("sha256", process.env.SHOPIER_API_SECRET)
    .update(str)
    .digest("base64");

  if (signature !== calculatedSignature) {
    return res.status(403).send("Invalid signature");
  }

  // Sipariş başarılı – burada işlemi kayıt edebilirsin
  console.log("Ödeme bildirimi geldi:", receivedData);

  res.send("OK");
}
module.exports = { handleWebhook };
