import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

/**
 * Fetches a list of books with a price less than or equal to 88,000 from the server
 * and generates card elements for each book.
 * 
 * This asynchronous function performs the following actions:
 * 1. Sends a GET request to the server to retrieve a list of books where the price
 *    is less than or equal to 88,000, limiting the results to 3 books.
 * 2. Maps the retrieved books to card elements using the `cardGenerator` function.
 * 3. Returns an array of card elements representing the fetched books.
 * 
 * If there is an error during the fetch operation, the error is logged to the console,
 * and an empty array is returned.
 * 
 * @async
 * @function fetchBooksCheapest
 * @returns {Promise<Array<HTMLElement>>} A promise that resolves to an array of card elements,
 *     each representing a book with a price less than or equal to 88,000. If an error occurs,
 *     an empty array is returned.
 * 
 * @throws {Error} Throws an error if the GET request fails or if there is an issue with
 *     processing the response data.
 * 
 */


async function fetchBooksCheapest() {
  try {
    let { data: books } = await axios.get("http://localhost:3000/books?_limit=3&price_lte=88000");

    // Generate card elements
    const cardElements = books.map(book => {
      return cardGenerator({
        bookId:book.id,
        titleContent: book.name,
        paragraphContent: book.description,
        size: "medium",
        statues: "primary",
        upImage: book.banner,
      });
    });

    return cardElements; // Return the array of card elements
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array on error
  }
}

export default fetchBooksCheapest;
