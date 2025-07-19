// You will be given some products that you should be able to add to your cart. Each product will have a name, picture, and price.
// When the "Add" button is clicked, append the current product to the textarea in the following format: "Added {name} for {money} to the cart.\n". The price must be fixed to the second digit.
// When the button "Checkout" is clicked, calculate the total money that you need to pay for the products that are currently in your cart. Append the result to the textarea in the following format: 
// "You bought {list} for {totalPrice}."
// The list should contain only the unique products, separated by ", ". The total price should be rounded to the second decimal point.
// Also, after clicking over "Checkout" and every from above is done you should disable all buttons. (You can't add products or checkout again if once the checkout button is clicked).


document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const allAddButtonEls = document.querySelectorAll('.add-product');
   const textareaEl = document.querySelector('textarea');
   const checkoutButtonEl = document.querySelector('.checkout');

   allAddButtonEls.forEach(btnEl => {
      btnEl.addEventListener('click', handleProductAdd);
   });

   checkoutButtonEl.addEventListener('click', handleCheckout);

   let products = new Set();
   let totalPrice = 0;

   function handleProductAdd(e) {
      const outerProductDivEl = e.target.closest('.product');
      const productTitleDivEl = outerProductDivEl.querySelector('.product-title');
      const product = productTitleDivEl.textContent;

      const priceDivEl = outerProductDivEl.querySelector('.product-line-price');
      const price = Number(priceDivEl.textContent);
      
      textareaEl.value +=  `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
      products.add(product);
      totalPrice += price;
   };

   function handleCheckout() {
      const productsString = Array.from(products).join(', ');
      textareaEl.value += `You bought ${productsString} for ${totalPrice.toFixed(2)}.`;
      checkoutButtonEl.disabled = true;
      allAddButtonEls.forEach(btnEl => btnEl.disabled = true);
   };
}
