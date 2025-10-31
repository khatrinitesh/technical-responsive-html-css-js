export async function fetchProducts() {
  const url = "https://jsonplaceholder.typicode.com/posts"; // Fake store API for demo purposes

  try {
    const response = await url;
    if (!response.ok) {
      throw new Error(`Sorry something went wrong ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching products", error);
    throw error; // Re-throw the error for further handling in the calling code
  }
}
