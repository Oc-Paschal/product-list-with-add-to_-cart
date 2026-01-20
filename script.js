
document.querySelectorAll(".product-card").forEach(card => {
  const addBtn = card.querySelector(".btn");
  const quantityBox = card.querySelector(".quantity");
  const minusBtn = card.querySelector(".minus");
  const plusBtn = card.querySelector(".plus");
  const countNo = card.querySelector(".count");

  let count = 1;
  
  addBtn.addEventListener("click", () => {
    card.classList.add("border-2", "border-red-500","rounded-xl" );
    addBtn.classList.add("hidden");
    quantityBox.classList.remove("hidden");
    countNo.textContent = count;
  });

  plusBtn.addEventListener("click", () => {
    count++;
    countNo.textContent = count;
  });

  minusBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      countNo.textContent = count;
    }
  });
});



// Initialize cart array
let cart = [];

// Get cart DOM elements
const productCountEl = document.getElementById("product-count");
const orderTotalEl = document.getElementById("orderTotal");

// Loop through each product card
document.querySelectorAll(".product-card").forEach(card => {
  const minus = card.querySelector(".minus");
  const plus = card.querySelector(".plus");
  const quantityEl = card.querySelector(".quantity");
  const addToCart = card.querySelector(".add-to-cart");

  // Increment quantity
  plus.addEventListener("click", () => {
    let qty = parseInt(quantityEl.textContent);
    quantityEl.textContent = qty + 1;
    updateCartLive(card, parseInt(quantityEl.textContent)); // optional live update
  });

  // Decrement quantity
  minus.addEventListener("click", () => {
    let qty = parseInt(quantityEl.textContent);
    if (qty > 1) quantityEl.textContent = qty - 1;
    updateCartLive(card, parseInt(quantityEl.textContent)); // optional live update
  });

  // Add to cart
  addToCart.addEventListener("click", () => {
    const productName = card.querySelector(".product-name").textContent;
    const productPrice = parseFloat(card.querySelector(".product-price").textContent.slice(1));
    const quantity = parseInt(quantityEl.textContent);

    // Check if item already exists in cart
    const existing = cart.find(item => item.name === productName);
    if (existing) {
      existing.quantity += quantity; // increment quantity
    } else {
      cart.push({ name: productName, price: productPrice, quantity: quantity });
    }

    renderCart();
  });
});

// Render cart function
function renderCart() {
  let totalQty = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalQty += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  productCountEl.textContent = totalQty;
  orderTotalEl.textContent = `$${totalPrice.toFixed(2)}`;
}

// Optional: live cart update when quantity changes before clicking Add to Cart
function updateCartLive(card, qty) {
  const productName = card.querySelector(".product-name").textContent;
  const productPrice = parseFloat(card.querySelector(".product-price").textContent.slice(1));

  const existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.quantity = qty; // update quantity live
  } else {
    // Only add temporarily if you want live preview before clicking "Add to Cart"
    // Comment this out if you don't want auto-add
    // cart.push({ name: productName, price: productPrice, quantity: qty });
  }

  renderCart();
}
