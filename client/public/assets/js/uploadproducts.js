
         // JSON dosyasını yükleme
   
          const products = document.querySelector('.product-card');

         // JSON dosyasını yükleme
         
         fetch('./products.json')
            .then(response => response.json())
            .then(products => {
               const container = document.getElementById('product-container');
               const tpl = document.getElementById('product-template').content;
               
               const countDiv = document.querySelector('.product-item-count');


               products.forEach(prod =>{
                  
                  //template içeriğini kopyalama
                  const clone = document.importNode(tpl, true);
                  const link = clone.querySelector('.product-card-link');
                  link.href = prod['product-link'];
                  // Kopyalanan içeriği products div'ine ekleme
                  clone.querySelector('.thumbitem-primary').src = prod['product-image-1'];
                  // Eğer ikinci resim varsa onu da yükle - Tek koymak istersen else kısmını kaldırabilirsin
                  if(prod['product-image-2']) {

                     clone.querySelector('.thumbitem-secondary').src = prod['product-image-2'];
                  } else {
                     clone.querySelector('.tpproduct__title').textContent = prod['product-title'];
                     clone.querySelector('.tpproduct__ammount-try span').textContent = prod['product-price-try'];
                     clone.querySelector('.tpproduct__ammount-try').dataset.price = prod['product-price-try'];
                     countDiv.textContent = `Toplam ${products.length} ürün gösteriliyor.`;

               }
                  // Ürünü container'a ekleme
                  container.appendChild(clone);
               });

               console.log(products);
            })
            .catch(err => console.error('Error loading products:', err));
      