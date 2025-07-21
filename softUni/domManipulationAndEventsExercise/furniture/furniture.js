// You will be given some furniture as an array of objects. Each object will have a name, a price, and a decoration factor. 
// When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture with image, name, price, and decoration factor (code example below). 
// When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture that were checked, separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1}, {furniture2}…".
// On the next line, print the total price in the format: "Total price: {totalPrice}". Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"
// Input Example
// [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]



document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEl = document.querySelector('#input');
  const inputTextareaEl = document.querySelector('#input textarea');
  const tbodyEl = document.querySelector('tbody');

  const shopFormEl = document.querySelector('#shop');
  const resultTextareaEl = document.querySelector('#shop textarea');
  shopFormEl.addEventListener('submit', handleBuyProducts)

  inputFormEl.addEventListener('submit', handleGenerateProducts);

  function handleGenerateProducts(e) {
    e.preventDefault();

    const json = inputTextareaEl.value.trim();
    const furnitureArray = JSON.parse(json);

    furnitureArray.forEach(furnitureObj => {
      const trEl = document.createElement('tr');
      const imgTdEl = document.createElement('td');
      const imgEl = document.createElement('img');
      imgEl.src = furnitureObj.img;
      imgTdEl.appendChild(imgEl);

      const nameTdEl = document.createElement('td');
      const namePEl = document.createElement('p');
      namePEl.textContent = furnitureObj.name;
      nameTdEl.appendChild(namePEl);

      const priceTdEl = document.createElement('td');
      const pricePEl = document.createElement('p');
      pricePEl.textContent = furnitureObj.price;
      priceTdEl.appendChild(pricePEl);

      const decFactorTdEl = document.createElement('td');
      const decFactorPEl = document.createElement('p');
      decFactorPEl.textContent = furnitureObj.decFactor;
      decFactorTdEl.appendChild(decFactorPEl);

      const checkedTdEl = document.createElement('td');
      const checkedInputEl = document.createElement('input');
      checkedInputEl.type = 'checkbox';
      checkedTdEl.appendChild(checkedInputEl);

      trEl.appendChild(imgTdEl);
      trEl.appendChild(nameTdEl);
      trEl.appendChild(priceTdEl);
      trEl.appendChild(decFactorTdEl);
      trEl.appendChild(checkedTdEl);
      
      tbodyEl.appendChild(trEl);
    });
  }

  function handleBuyProducts(e) {
    e.preventDefault();
    const formEl = e.target;
    const allSelectedCheckboxEls = Array.from(formEl.querySelectorAll('input:checked'));
    const allSelectedTrEls = allSelectedCheckboxEls.map(checkboxEl => checkboxEl.closest('tr'));
    console.log(allSelectedTrEls);

    const allFurnitureNames = allSelectedTrEls.map(trEl => trEl.querySelector('td:nth-child(2) p').textContent);
    const allFurniturePrices = allSelectedTrEls.map(trEl => Number(trEl.querySelector('td:nth-child(3) p').textContent));
    const allFurnituredecFactors = allSelectedTrEls.map(trEl => Number(trEl.querySelector('td:nth-child(4) p').textContent));
    
    const totalFurniturePrice = allFurniturePrices.reduce((acc, val) => acc + val);
    const avgFurnitureDecFactor = allFurnituredecFactors.reduce((acc, val) => acc + val) / allFurnituredecFactors.length;


    resultTextareaEl.value =
      `Bought furniture: ${allFurnitureNames.join(', ')}\n` +
      `Total price: ${totalFurniturePrice}\n` +
      `Average decoration factor: ${avgFurnitureDecFactor}`;
  }
}