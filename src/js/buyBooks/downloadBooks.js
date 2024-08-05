import axios from "axios";

import updateUserHistory from "./updateHistoryList";

/**
 * Processes successful payment, downloads purchased PDF files, and updates the user's purchase list.
 *
 * This function is called after a successful payment. It first retrieves the logged-in user's information 
 * from localStorage, then fetches the list of purchased books from the database. Each book's PDF file 
 * is downloaded in a new tab, and then the book is removed from the user's purchase list. Finally, 
 * the updated purchase list is sent back to the database.
 *
 * @async
 * @function processPaymentSuccess
 *
 * @throws {Error} If the logged-in user information is not found in localStorage or fetching data from the database fails.
 * @throws {Error} If downloading the PDF file or updating the purchase list in the database fails.
 *
 */

/**
 * Processes the payment success, downloads the books, and updates the user's purchase history.
 * @returns {Promise<void>}
 */
async function processPaymentSuccess() {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.id) {
      console.error("User not logged in or invalid user data.");
      return;
    }
    const userId = currentUser.id;
    let response = await axios.get(`http://localhost:3000/user/${userId}`);
    let user = response.data;
    let boughtBooks = user.boughtList;

    for (const bookId of boughtBooks) {
      try {
        let bookResponse = await axios.get(`http://localhost:3000/books/${bookId}`);
        let book = bookResponse.data;

        let pdfUrl = book.pdf;
        window.open(pdfUrl, "_blank");

        boughtBooks = boughtBooks.filter((id) => id !== bookId);
      } catch (error) {
        console.error("Error downloading the PDF:", error);
      }
    }

    // Update the user's boughtList in the database
    await axios.patch(`http://localhost:3000/user/${userId}`, {
      boughtList: boughtBooks,
    });

    // Update user history after successful download and boughtList clearing
    await updateUserHistory(user.boughtList);

  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

export default processPaymentSuccess;