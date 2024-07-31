import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

/**
 * Fetches a list of books from the server and displays them sorted by date.
 * 
 * This asynchronous function retrieves books from the server and sorts them based on the provided order.
 * It then generates card elements for each book and appends them to the element with ID `productsContent`.
 * 
 * The sorting order is determined by the `order` parameter:
 * - If `order` is `'newest'`, the books are sorted in descending order (newest first).
 * - If `order` is anything else, the books are sorted in ascending order (oldest first).
 * 
 * If there is an error during the fetch operation, the error is logged to the console.
 * 
 * @async
 * @function filterByDate
 * @param {string} order - The order in which to sort the books. Can be `'newest'` or any other value.
 *     If `'newest'`, books will be sorted by date in descending order. Otherwise, they will be sorted in ascending order.
 * @returns {Promise<void>} A promise that resolves when the books have been fetched, sorted, and displayed.
 * 
 * @throws {Error} Throws an error if the GET request fails or if there is an issue with
 *     processing the response data.
 * 
 */

async function filterByDate(order) {
  let productsContent = document.getElementById('productsContent')
  try {
    const sortOrder = order === 'newest' ? 'desc' : 'asc';
    const { data: books } = await axios.get(`http://localhost:3000/books?_sort=date&_order=${sortOrder}`);
    productsContent.innerHTML = ''; // Clear existing cards

    const cardElements = books.map(book => {
      return cardGenerator({
        titleContent: book.name,
        paragraphContent: book.description,
        size: "medium",
        statues: "primary",
        upImage: book.banner,
      });
    });

    cardElements.forEach(cardElement => {
      productsContent.appendChild(cardElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default filterByDate;
