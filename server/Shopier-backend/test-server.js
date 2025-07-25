const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('cftctileceramic')); // public klasör

app.listen(PORT, () => {
  console.log(`✅ Sunucu çalışıyor: http://localhost:${PORT}`);
});
