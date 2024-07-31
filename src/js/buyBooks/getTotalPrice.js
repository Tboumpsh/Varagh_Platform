import domGenerator from "dom-generator";
import axios from "axios";

/**
 * Calculates the total price of books in the bought list and appends it to the DOM.
 *
 * @param {string} userName - The name of the user whose bought list is to be processed.
 * @returns {Promise<void>} - A promise that resolves when the total price has been calculated and appended.
 */
async function calculateAndDisplayTotalPrice(userName) {
  if (!userName) {
    console.error("No user logged in");
    return;
  }

  try {
    const { data: users } = await axios.get(
      `http://localhost:3000/user?name=${userName}`
    );
    if (users.length === 0) {
      console.error("User not found");
      return;
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

    // Create and append the total price element
    const totalPriceElement = domGenerator({
      tag: "h3",
      properties: { textContent: `قیمت کل: ${totalPrice} تومان` },
    });

    const buyListElement = document.getElementById("totalPrice");
    buyListElement.append(totalPriceElement);
  } catch (error) {
    console.error("Error calculating total price:", error);
  }
}

export default calculateAndDisplayTotalPrice;
