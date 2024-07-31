import axios from "axios";

/**
 * Calculates the total price of books in the bought list.
 *
 * @param {string} userName - The name of the user whose bought list is to be processed.
 * @returns {Promise<number>} - A promise that resolves to the total price.
 */
async function calculateTotalPrice(userName) {
  if (!userName) {
    console.error("No user logged in");
    return 0;
  }

  try {
    const { data: users } = await axios.get(
      `http://localhost:3000/user?name=${userName}`
    );
    if (users.length === 0) {
      console.error("User not found");
      return 0;
    }

    const user = users[0];
    const boughtList = user.boughtList || [];

    const bookPromises = boughtList.map((bookId) =>
      axios.get(`http://localhost:3000/books/${bookId}`)
    );
    const books = await Promise.all(bookPromises);
    const totalPrice = books.reduce(
      (sum, { data: book }) => sum + book.price,
      0
    );

    return totalPrice;
  } catch (error) {
    console.error("Error calculating total price:", error);
    return 0;
  }
}

export default calculateTotalPrice;
