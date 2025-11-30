const clothesProducts = [];
const shoesProducts = [];

// Product types
const clothingTypes = ["T-Shirt", "Jeans", "Hoodie", "Jacket", "Shirt", "Sweater", "Skirt", "Dress"];
const shoeTypes = ["Sneakers", "Boots", "Sandals", "Running Shoes", "Loafers", "Flip-Flops"];

// Generate 100 clothes
for (let i = 1; i <= 100; i++) {
    const type = clothingTypes[Math.floor(Math.random() * clothingTypes.length)];
    const price = Math.floor(Math.random() * 50 + 10); // $10 - $60
    const img = `https://source.unsplash.com/150x150/?${type.replace(" ", "")},clothes&sig=${i}`;
    clothesProducts.push({name: `${type} #${i}`, price: `$${price}`, img});
}

// Generate 100 shoes
for (let i = 1; i <= 100; i++) {
    const type = shoeTypes[Math.floor(Math.random() * shoeTypes.length)];
    const price = Math.floor(Math.random() * 70 + 20); // $20 - $90
    const img = `https://source.unsplash.com/150x150/?${type.replace(" ", "")},shoes&sig=${i}`;
    shoesProducts.push({name: `${type} #${i}`, price: `$${price}`, img});
}

// Function to display products
function displayProducts(products, elementId) {
    const container = document.getElementById(elementId);
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        container.appendChild(div);
    });
}

// Display products
displayProducts(clothesProducts, "clothes-products");
displayProducts(shoesProducts, "shoes-products");
