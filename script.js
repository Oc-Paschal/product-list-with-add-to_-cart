const products = [
  {
    id: 1,
    name: "Waffle with Berries",
    price: 6.50,
    images: {
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    }
  },
  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    price: 7.00,
    images: {
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    }
  },
  {
    id: 3,
    name: "Macaron Mix of Five",
    price: 8.00,
    images: {
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    }
  },
  {
    id: 4,
    name: "Classic Tiramisu",
    price: 5.50,
    images: {
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    }
  },
  {
    id: 5,
    name: "Pistachio Baklava",
    price: 4.00,
    images: {
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    }
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    price: 5.00,
    images: {
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    }
  },
  {
    id: 7,
    name: "Red Velvet Cake",
    price: 4.50,
    images: {
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    }
  },
  {
    id: 8,
    name: "Salted Caramel Brownie",
    price: 4.50,
    images: {
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    }
  },
  {
    id: 9,
    name: "Vanilla Panna Cotta",
    price: 6.50,
    images: {
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    }
  }
];



const productList = document.getElementById("product-list");

products.forEach(product => {
  productList.innerHTML += `
    <div class="product-card border rounded-xl p-4">
      <img src="${product.image}" class="rounded-lg mb-3">
      <h3 class="font-semibold">${product.name}</h3>
      <p class="text-gray-600">$${product.price}</p>
      <button class="btn mt-3 bg-orange-500 text-white px-4 py-2 rounded">
        Add to cart
      </button>
    </div>
  `;
});
