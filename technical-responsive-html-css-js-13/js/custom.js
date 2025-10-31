// wait until the dom is fully loaded before executing
document.addEventListener("DOMContentLoaded", () => {
  // get the button and products container
  const ctaButton = document.getElementById("cta-button");
  const productsContainer = document.getElementById("products-container");

  // Simulate some product data
  const products = [
    { name: "Product 1", description: "This is an amazing product." },
    { name: "Product 2", description: "You will love this product." },
    { name: "Product 3", description: "The best product in the market." },
    { name: "Product 4", description: "A must-have product." },
  ];

  // function to render products dynamically
  function renderProducts() {
    productsContainer.innerHTML = ""; // Clear the container
    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button class="buy-now">Buy Now</button>
      `;

      // Append each product item to the container
      productsContainer.appendChild(productItem);
    });
  }

  // add eventlistener to the 'learn more' button
  ctaButton.addEventListener("click", () => {
    alert("you clicked the learn more button");
  });
  renderProducts();

  document.getElementById("currentYear").innerText = new Date().getFullYear();
});
