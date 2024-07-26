import axios from "axios";

import bookCardGenerator from "../../../sectionComponent/booksCardComponent/booksCardComponent";

async function showBookDetails(bookTitle) {
  try {
    // Fetch book details by title (assuming a unique identifier)
    let { data: book } = await axios.get(`http://localhost:3000/books?name=${bookTitle}`);
    
    // Check if the book is found
    if (book.length > 0) {
      // Assuming book is an array of objects, take the first one
      const bookDetails = book[0];

      // Generate the book card with the retrieved book details
      bookCardGenerator({
        titleBook: bookDetails.name,
        bookDescription: bookDetails.description,
        bannerSrc: bookDetails.banner,
        bookPrice: bookDetails.price
      });
    } else {
      console.error("Book not found.");
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
}

// Function to show modal with book details


export default showBookDetails;