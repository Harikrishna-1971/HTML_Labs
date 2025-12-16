// ===============================
// Parent Class
// ===============================
class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

  // Common method
  getCardHTML() {
    return `
      <div class="product-card">
        <img src="${this.image}" alt="${this.name}">
        <h3>${this.name}</h3>
        <p class="price">$${this.price}</p>
      </div>
    `;
  }
}

// ===============================
// Child Class (Inheritance)
// ===============================
class ElectronicProduct extends Product {
  constructor(name, price, image, warranty) {
    super(name, price, image);
    this.warranty = warranty;
  }

  // Overriding
  getCardHTML() {
    return `
      <div class="product-card">
        <img src="${this.image}" alt="${this.name}">
        <h3>${this.name}</h3>
        <p class="price">$${this.price}</p>
        <p>Warranty: ${this.warranty} years</p>
      </div>
    `;
  }
}

// ===============================
// Example Products
// ===============================
const products = [
  new Product("Shoes", 40, "https://www.kdclick.com/s/637763a5ea78e200824eb640/66aa1db211a2b7f846152c09/gowin-cricket-shoes-3.jpg"),
  new ElectronicProduct(
    "Smartphone",
    299,
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRClhhZXZ0Uht4r85mxA38KWxJjoHjpN4i00wGjf02qtBHCl7F1kZqMANb_n5ugMMWpVjQsA3ib6Y-_CZ-iP1VeejcUpErbOOpauW0SkuGDbwhc4KNeML3R7w",
    2
  ),
  new Product("Backpack", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmCnTDkXbnitoxsiRsj4Eu5TJ5DK2sMAzVQ&s"),
];

// ===============================
// Display Products
// ===============================
const list = document.getElementById("product-list");

products.forEach((p) => {
  list.innerHTML += p.getCardHTML();
});

// ===============================
// Theme Toggle Button
// ===============================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
