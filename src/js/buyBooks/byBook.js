import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import silverBox from "/Lib/silverBox/silverBox.min";

/**
 * Buys a book by its ID and adds it to the user's bought list if it hasn't been purchased already.
 * 
 * This asynchronous function performs the following actions:
 * 1. Retrieves the current user's name from local storage.
 * 2. Fetches the user details from the server using the username.
 * 3. Checks if the book has already been purchased by the user.
 * 4. If not, adds the book ID to the user's bought list and updates the user record on the server.
 * 5. Displays a success message if the book was successfully added to the bought list.
 * 6. Displays an information message if the book was already purchased.
 * 7. Logs errors to the console if any issues occur during the process.
 * 
 * @param {number} bookId - The unique identifier of the book to be purchased. This ID is used to check if 
 *     the book is already in the user's bought list and to update the list if necessary.
 * 
 * @returns {Promise<void>} A promise that resolves when the book purchase process has been completed, or 
 *     rejects if an error occurs during the process.
 * 
 * @throws {Error} Throws an error if the current user cannot be determined, if the user cannot be found, or 
 *     if there is an error during the HTTP requests or the book purchase process.
 * 
 */


async function buyBook(bookId) {
  const { name: userName } = JSON.parse(localStorage.getItem("currentUser"));

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

    if (!boughtList.includes(bookId)) {
      boughtList.push(bookId);

      await axios.put(`http://localhost:3000/user/${user.id}`, {
        ...user,
        boughtList,
      });

      silverBox({
        title: {
          text: "خرید انجام شد",
          alertIcon: "success",
        },
        text: "کتاب مورد نظر شما به لیست خریدها اضافه شد",
      });
    } else {
      silverBox({
        position: "top-right",
        alertIcon: "info",
        text: "شما قبلا این کتاب را خریداری کرده‌اید.",
        centerContent: true,
        showCloseButton: true,
      });
    }
  } catch (error) {
    console.error("Error buying book:", error);
  }
}

export default buyBook;
