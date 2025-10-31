// Import the fetchProducts function from the api.js module
import { fetchProducts } from "./api";

// DOM Elements
const productsContainer = document.getElementById("products-container");
const loadingMessage = document.getElementById("loading-message");
const yearSpan = document.getElementById("year");

// Function to display product data in the DOM
function displayProducts(products) {
  loadingMessage.style.display = "none"; // Hide loading message when data is fetched

  // Iterate over the products (posts in this case) and display them
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product-item");

    productElement.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.body}</p>
      <p><strong>ID:</strong> ${product.id}</p>
    `;

    productsContainer.appendChild(productElement);
  });
}

// Function to display an error message if something goes wrong
function displayError(error) {
  loadingMessage.style.display = "none";
  productsContainer.innerHTML = `<p style="color: red;">Failed to load products. Please try again later.</p>`;
  console.error("Error:", error);
}

// Function to initialize the page
async function init() {
  try {
    // Fetch products (posts) from the API
    const products = await fetchProducts();
    displayProducts(products); // Display fetched data in DOM
  } catch (error) {
    displayError(error); // Handle errors if fetching fails
  }
}

// Display the current year in the footer
yearSpan.innerText = new Date().getFullYear();

// Start the process of fetching and displaying products
init();
