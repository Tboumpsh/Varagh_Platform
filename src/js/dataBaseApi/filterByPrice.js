import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

/**
 * Fetches a list of books from the server, sorts them by price, and displays them.
 * 
 * This asynchronous function retrieves books from the server and sorts them based on the provided order.
 * The books are sorted by price in either ascending or descending order depending on the `order` parameter.
 * After sorting, card elements are generated for each book and appended to the element with ID `productsContent`.
 * 
 * The sorting order is determined by the `order` parameter:
 * - If `order` is `'asc'`, the books are sorted in ascending order (cheapest first).
 * - If `order` is `'desc'`, the books are sorted in descending order (most expensive first).
 * 
 * If there is an error during the fetch operation, the error is logged to the console.
 * 
 * @async
 * @function filterByPrice
 * @param {string} order - The order in which to sort the books by price. Can be `'asc'` for ascending or `'desc'` for descending.
 * @returns {Promise<void>} A promise that resolves when the books have been fetched, sorted, and displayed.
 * 
 * @throws {Error} Throws an error if the GET request fails or if there is an issue with
 *     processing the response data.
 * 
 */


async function filterByPrice(order) {
  let productsContent = document.getElementById('productsContent')
  try {
    const { data: books } = await axios.get(
      `http://localhost:3000/books?_sort=price&_order=${order}`
    );
   
    productsContent.innerHTML = ""; // Clear existing cards

    const cardElements = books.map((book) => {
      return cardGenerator({
        bookId:book.id,
        titleContent: book.name,
        paragraphContent: book.description,
        size: "medium",
        statues: "primary",
        upImage: book.banner,
      });
    });

    cardElements.forEach((cardElement) => {
      productsContent.appendChild(cardElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default filterByPrice;
