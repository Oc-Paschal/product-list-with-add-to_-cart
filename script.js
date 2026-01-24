const products = [
  {
    id: 1,
    category: "waffle",
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
    category: "Crème Brûlée",
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
    category:"Macaron",
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
    category:"Tiramisu",
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
    category:"Baklava",
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
    category:"Pie",
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
    category:"Cake",
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
    category:"Brownie",
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
    category:"Panna Cotta",
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
    <div class="product-card">
      <div class="relative w-full sm:max-w-sm lg:max-w-xs mx-auto m-5">

        <picture>
          <source srcset="${product.images.desktop}" media="(min-width:1025px)">
          <source srcset="${product.images.tablet}" media="(min-width:768px)">
          <div class="image-wrapper rounded-xl overflow-hidden border border-transparent">
          <img src="${product.images.mobile}"
               class="w-full h-64 object-cover rounded-lg">
               </div>
              
        </picture>

        <button
          class=" add-btn absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2
          flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow border border-gray-400">
          <img src="./assets/images/icon-add-to-cart.svg" alt="">
          Add to cart
        </button>
        <div
    class="quantity hidden absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2
           flex items-center gap-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow">

    <button class="minus w-6 h-6 flex items-center justify-center
         rounded-full border-2 border-white text-white font-bold">−</button>
            <span class="count text-sm font-semibold">1</span>
          <button class="plus w-6 h-6 flex items-center justify-center
         rounded-full border-2 border-white text-white font-bold">+</button>
  </div>

      </div>

      <p class="text-gray-400">${product.category}</p>
      <p class="font-semibold">${product.name}</p>
      <p class="text-red-500 font-medium">$${product.price.toFixed(2)}</p>
    </div>
  `;
});


document.querySelectorAll(".product-card").forEach(card => {
  const addBtn = card.querySelector(".add-btn");
  const quantityBox = card.querySelector(".quantity");
  const minusBtn = card.querySelector(".minus");
  const plusBtn = card.querySelector(".plus");
  const countEl = card.querySelector(".count");
  const imageWrapper = card.querySelector(".image-wrapper");

  let count = 1;

  addBtn.addEventListener("click", () => {
    imageWrapper.classList.add("border-2", "border-orange-600");
    imageWrapper.classList.remove("border-transparent");

    addBtn.classList.add("hidden");
    quantityBox.classList.remove("hidden");

    countEl.textContent = count;
  });

  plusBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });

  minusBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      countEl.textContent = count;
    }
  });
});

