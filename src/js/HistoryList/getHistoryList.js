import "/pages/historyBuyList/index.scss";
import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

/**
 * Retrieves the list of books that the current user has bought (history list).
 *
 * This function performs the following actions:
 * 1. Retrieves the username of the currently logged-in user from `localStorage`.
 * 2. Fetches the user data from the server based on the retrieved username.
 * 3. Checks if the user exists and retrieves the list of bought books (history list) for that user.
 * 4. Fetches all books from the server.
 * 5. Filters the books to include only those that are in the user's history list.
 * 6. Displays the filtered list of bought books using the `displayHistoryBooks` function.
 *
 * @async
 * @function getHistoryList
 *
 * @returns {Promise<void>} This function does not return any value. It performs actions and updates the DOM.
 *
 * @throws {Error} Throws an error if there is a problem with fetching user or book data.
 *
 */

async function getHistoryList() {
  const { name: userName } = JSON.parse(localStorage.getItem("currentUser"));

  if (!userName) {
    alert("No user logged in");
    return;
  }

  try {
    const { data: users } = await axios.get(
      `http://localhost:3000/user?name=${userName}`
    );
    if (users.length === 0) {
      alert("User not found");
      return;
    }

    const user = users[0];
    const historyList = user.historyList || [];

    const { data: books } = await axios.get("http://localhost:3000/books");
    const historyBooks = books.filter((book) =>
      historyList.some((historyItem) => historyItem.id === book.id)
    );

    displayHistoryBooks(historyBooks);
  } catch (error) {
    console.error("Error fetching history list:", error);
    alert("An error occurred while fetching the history list");
  }
}

function displayHistoryBooks(books) {
  const historyListSection = document.getElementById("historyListSection");
  if (!historyListSection) {
    console.error('Element with id "historyListSection" not found');
    return;
  }
  historyListSection.innerHTML = "";

  books.forEach((book) => {
    const bookElement = cardGenerator({
      bookId: book.id,
      titleContent: book.name,
      paragraphContent: book.description,
      size: "medium",
      statues: "primary",
      upImage: book.banner,
    });

    // Add PDF link to the card
    const pdfLink = document.createElement("a");
    pdfLink.href = book.pdf;
    pdfLink.textContent = "دانلود pdf کتاب";
    pdfLink.target = "_blank";
    pdfLink.setAttribute("id", "downloadPdfBooks");
    bookElement.appendChild(pdfLink);

    historyListSection.append(bookElement);
  });
}

export default getHistoryList;
