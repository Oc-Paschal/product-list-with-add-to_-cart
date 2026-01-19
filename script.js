
document.querySelectorAll(".product-card").forEach(card => {
  const addBtn = card.querySelector(".btn");
  const quantityBox = card.querySelector(".quantity");
  const minusBtn = card.querySelector(".minus");
  const plusBtn = card.querySelector(".plus");
  const countNo = card.querySelector(".count");

  let count = 1;
  
  addBtn.addEventListener("click", () => {
    card.classList.add("border-red-500");
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
