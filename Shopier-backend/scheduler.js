// scheduler.js
const cron = require('node-cron');
const runScraper = require('./scraper');

// “0 8 * * *” ifadesi her gün saat 08:00’i temsil eder
cron.schedule('0 8 * * *', () => {
  console.log('Zamanlanmış görev tetiklendi:', new Date().toLocaleString());
  runScraper();
}, {
  timezone: 'Europe/Istanbul'   // Sunucu farklı bir TZ’deyse kesin zaman için
});

// Eğer bu dosyayı node scheduler.js ile çalıştırırsanız,
// process açık kaldığı sürece her gün 08:00’de scraper tetiklenir.