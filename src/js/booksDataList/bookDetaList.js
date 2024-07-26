import axios from "axios";

async function showBookDetails(bookTitle) {
  try {
    // Fetch book details by title (assuming a unique identifier)
    let { data: book } = await axios.get(
      `http://localhost:3000/books?name=${bookTitle}`
    );

    // Display book details in a modal or new page
    console.log("Book details:", book);

    // Example: Open a modal and fill with book details
    // Replace with your own modal implementation
    alert(`${book}`);
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
}

// Function to show modal with book details


export default showBookDetails;