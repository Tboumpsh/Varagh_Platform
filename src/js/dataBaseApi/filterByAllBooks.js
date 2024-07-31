import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

/**
 * Fetches a list of all books from the server and displays them as card elements in the specified container.
 * 
 * This asynchronous function performs the following actions:
 * 1. Sends a GET request to the server to retrieve a list of all books.
 * 2. Clears the existing content of the element with ID `productsContent`.
 * 3. Maps the retrieved books to card elements using the `cardGenerator` function.
 * 4. Appends each card element to the `productsContent` container.
 * 
 * If there is an error during the fetch operation, the error is logged to the console.
 * 
 * @async
 * @function filterByAllBooks
 * @returns {Promise<void>} A promise that resolves when the books have been fetched and displayed.
 * 
 * @throws {Error} Throws an error if the GET request fails or if there is an issue with
 *     processing the response data.
 * 
 */

async function filterByAllBooks() {

    const productsContent = document.getElementById('productsContent');


    try {
      const { data: books } = await axios.get(`http://localhost:3000/books`);
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

export default filterByAllBooks;
