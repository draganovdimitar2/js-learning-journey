// You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.


function updateStoreStock(currentStock, deliveryStock) {
    const store = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        const quantity = Number(currentStock[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < deliveryStock.length; i += 2) {
        const product = deliveryStock[i];
        const quantity = Number(deliveryStock[i + 1]);

        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}
