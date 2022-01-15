function solve() {

   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);

   let products = [];
   let total = 0;
   function onClick(ev) {

      if (ev.target.className.includes('add-product')) {

         let productName = ev.target.parentNode.parentNode
            .getElementsByClassName('product-details')[0]
            .getElementsByClassName('product-title')[0].textContent;

         let productPrice = Number(ev.target.parentNode.parentNode
            .getElementsByClassName('product-line-price')[0].textContent);

         if (!products.includes(productName)) {
            products.push(productName);
         }

         total += productPrice;

         document.getElementsByTagName('TEXTAREA')[0].textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

      } else if (ev.target.className.includes('checkout')) {
         document.getElementsByTagName('TEXTAREA')[0].textContent += `You bought ${products.join(', ')} for ${total.toFixed(2)}.`;

         let buttons = Array.from(document.getElementsByTagName('BUTTON'));
         for (let button of buttons) {
            button.disabled = true;
         }
      }
   }
}