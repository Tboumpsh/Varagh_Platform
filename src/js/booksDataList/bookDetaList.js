import axios from "axios";

import bookCardGenerator from "../../../sectionComponent/booksCardComponent/booksCardComponent";

/**
 * Fetches details of a book by its title and displays the book card in the DOM.
 * 
 * This function performs an asynchronous HTTP GET request to fetch book details based on the provided title. 
 * If the book is found, it generates a book card with the book details and appends it to an HTML element 
 * with the id `bookInfo`. If no book is found or if an error occurs, it logs an appropriate message to the console.
 * 
 * @param {string} bookTitle - The title of the book to fetch details for. The title is used to query the book 
 *     details from the backend server.
 * 
 * @returns {Promise<void>} A promise that resolves when the book details have been successfully fetched and 
 *     displayed, or rejects if an error occurs during the fetch operation.
 * 
 * @throws {Error} Throws an error if the HTTP request fails or if the book cannot be found.
 * 
 * showBookDetails('The Great Gatsby')
 *   .then(() => console.log('Book details displayed successfully.'))
 *   .catch((error) => console.error('Failed to show book details:', error));
 */

async function showBookDetails(bookTitle) {
  try {
    // Fetch book details by title (assuming a unique identifier)
    let { data: book } = await axios.get(
      `http://localhost:3000/books?name=${bookTitle}`
    );

    // Check if the book is found
    if (book.length > 0) {
      // Assuming book is an array of objects, take the first one
      const bookDetails = book[0];

      // Generate the book card with the retrieved book details
      const bookCard = bookCardGenerator({
        bookId: bookDetails.id,
        titleBook: bookDetails.name,
        bookDescription: bookDetails.description,
        bannerSrc: bookDetails.banner,
        bookPrice: bookDetails.price,
      });
      const bookInfo = document.getElementById("bookInfo");
      bookInfo.innerHTML = ""; // Clear previous content if needed
      bookInfo.appendChild(bookCard);
    } else {
      console.error("Book not found.");
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
}

// Function to show modal with book details

export default showBookDetails;
