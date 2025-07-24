
            // 1. Select all price filter checkboxes
         const priceCheckboxes = document.querySelectorAll('.product-price-list .form-check-input[data-min][data-max]');
         
            // 2. Listen for changes
         priceCheckboxes.forEach(cb => {
         cb.addEventListener('change', () => {
            // Collect all checked ranges
            const checkedRanges = Array.from(priceCheckboxes)
               .filter(cb => cb.checked)
               .map(cb => ({
               min: parseFloat(cb.getAttribute('data-min').replace('.', '').replace(',', '.')),
               max: parseFloat(cb.getAttribute('data-max').replace('.', '').replace(',', '.'))
               }));

            // If none checked, show all
            if (checkedRanges.length === 0) {
               document.querySelectorAll('.col').forEach(col => col.style.display = '');
               return;
            }

            // Show products that match any selected range
            let col = document.querySelectorAll('.col');
            document.querySelectorAll('.col').forEach(col => {
               const priceDiv = col.querySelector('.tpproduct__ammount-try');
               if (priceDiv) {
               const price = parseFloat(priceDiv.dataset.price.replace('.', '').replace(',', '.'));
               const match = checkedRanges.some(range => price >= range.min && price <= range.max);
               col.style.display = match ? '' : 'none';
               
               }
               
            });

         });
      });