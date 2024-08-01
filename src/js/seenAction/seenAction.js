import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import silverBox from "/Lib/silverBox/silverBox.min";

/**
 * Fetches details of a book by its ID and displays them using SilverBox.
 * 
 * This function performs an asynchronous HTTP GET request to fetch book details based on the provided ID. 
 * If the book is found, it displays the book details in a SilverBox modal. 
 * If no book is found or if an error occurs, it logs an appropriate message to the console.
 * 
 * @async
 * @function seenAction
 * 
 * @param {number} bookId - The ID of the book to fetch details for.
 * 
 * @returns {Promise<void>} A promise that resolves when the book details have been successfully fetched and 
 *     displayed, or rejects if an error occurs during the fetch operation.
 * 
 * @throws {Error} Throws an error if the HTTP request fails or if the book cannot be found.
 */
async function seenAction(bookId) {

  try {
    let { data: book } = await axios.get(
      `http://localhost:3000/books/${bookId}`
    );
    if (book) {
      silverBox({
        timer: 2000,
        customIcon: `${book.banner}`,
        text: `${book.description}`,
        title: `قیمت: ${book.price} تومان`,
        centerContent: true,
      });
    } else {
      console.error("Book not found.");
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
}
export default seenAction;
