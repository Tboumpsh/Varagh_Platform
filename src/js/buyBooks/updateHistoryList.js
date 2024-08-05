import axios from "axios";

/**
 * Updates the user's purchase history by adding the details of the purchased books.
 * @param {Array} boughtBooks - List of book IDs that the user has bought.
 * @returns {Promise<void>}
 */
async function updateUserHistory(boughtBooks) {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.id) {
      console.error("User not logged in or invalid user data.");
      return;
    }
    const userId = currentUser.id;

    // Get the current user data from the database
    let response = await axios.get(`http://localhost:3000/user/${userId}`);
    let user = response.data;
    let historyList = user.historyList || [];

    // Get details of each bought book and add to historyList
    for (const bookId of boughtBooks) {
      try {
        let bookResponse = await axios.get(
          `http://localhost:3000/books/${bookId}`
        );
        let book = bookResponse.data;
        historyList.push({
          id: book.id,
          name: book.name,
          genre: book.genre,
          price: book.price,
          banner: book.banner, // Add banner for display purposes
          pdfLink: book.pdf, // Add PDF link for download
          purchasedAt: new Date().toISOString(),
        });
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }

    // Update the user's history list in the database
    await axios.patch(`http://localhost:3000/user/${userId}`, {
      historyList: historyList,
    });

    console.log("User history updated successfully.");
  } catch (error) {
    console.error("Error updating user history:", error);
  }
}

export default updateUserHistory;
