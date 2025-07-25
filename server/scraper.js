const axios = require ('axios');
const cheerio = require('cheerio');
const fs = require('fs');


const shopierUrl = 'https://www.shopier.com/ShowProductNew/storefront.php?shop=cftctileceramic';

axios.get(shopierUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36'
  }
}).then((response) => {
  const $ = cheerio.load(response.data);

  const products = [];
  $('.product-card').each((i, el) => {
    const title = $(el).find('.product-card-title > h3').text().trim();
    const price = $(el).find('.price-current .price-value').text().trim();
    const image1 = $(el).find('img').attr('src');
    const pLink = $(el).find('a').attr('href');

    if (!title || !price || !image1 || !pLink) {
      console.log('Eksik veri bulundu, atlanıyor...');
      return; // Eksik veri varsa bu ürünü atla
    }

    console.log({ title, price, image1, pLink });
    // Bu verileri kendi sitene DB'ye kaydet

    //Json yazma
     products.push({
    "product-title": title,
    "product-price-try": price,
    "product-image-1": image1,
    "product-link": pLink
  });

    // JSON dosyasına yazma
    fs.writeFileSync('client/public/products.json', JSON.stringify(products, null, 2) + '\n', 'utf-8');
  });
  console.log('✅ JSON başarıyla kaydedildi!');

});
