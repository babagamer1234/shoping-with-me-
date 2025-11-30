// ====== Free Fire IDs (2 IDs: 1st with 5 images, 2nd with 3 images) ======
const freeFireIDs = [
    {
        name: "FF_ProPlayer1",
        price: "₹1000",
        images: [
            "https://i.ibb.co/7xXh68ym/image1.jpg",
            "https://i.ibb.co/TxX31Lfp/image2.jpg",
            "https://i.ibb.co/9ksKMfX0/image3.jpg",
            "https://i.ibb.co/tjKQfrd/image4.jpg",
            "https://i.ibb.co/ZRhgKj06/image5.jpg"
        ]
    },
    {
        name: "FF_SniperKing",
        price: "₹500",
        images: [
            "https://i.ibb.co/67ppBBBq/image1.jpg",
            "https://i.ibb.co/TM8NTsR0/image2.jpg",
            "https://i.ibb.co/SDd2dcNQ/image3.jpg"
        ]
    }
];

// Display IDs
const container = document.getElementById("idContainer");

freeFireIDs.forEach(id => {
    const div = document.createElement("div");
    div.className = "id-card";

    let imagesHtml = `<div class="images-container">${id.images.map(img => `<img src="${img}" alt="${id.name}">`).join("")}</div>`;

    div.innerHTML = `
        <h3>${id.name}</h3>
        <p>Price: ${id.price}</p>
        ${imagesHtml}
        <a href="https://wa.me/1234567890?text=Hi,%20I%20want%20to%20buy%20the%20Free%20Fire%20ID%20${id.name}" target="_blank">
            <button>Buy Now</button>
        </a>
    `;

    container.appendChild(div);
});
