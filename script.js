const products = [
  { name: "Shampoo", price: 1000, img: "product1.jpg" },
  { name: "Wireless Headphones", price: 2499, img: "product2.jpg" },
  { name: "Sports Shoes", price: 3999, img: "product3.jpg" },
  { name: "Wrist Watch", price: 2999, img: "product4.jpg" }
];

const productList = document.getElementById('productList');

products.forEach(product => {
  const col = document.createElement('div');
  col.className = 'col-md-3';
  col.innerHTML = `
    <div class="card shadow-sm">
      <img src="${product.img}" class="card-img-top" alt="${product.name}">
      <div class="card-body text-center">
        <h5>${product.name}</h5>
        <p class="text-success fw-bold">₹${product.price}</p>
        <button class="btn btn-dark add-to-cart">Add to Cart</button>
      </div>
    </div>
  `;
  productList.appendChild(col);
});

