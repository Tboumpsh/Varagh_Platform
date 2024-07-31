import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import silverBox from "/Lib/silverBox/silverBox.min";

/**
 * Adds a book to the user's love list if it is not already present.
 * 
 * This function performs the following actions:
 * 1. Retrieves the currently logged-in user's name from `localStorage`.
 * 2. Fetches the user data from the server based on the retrieved username.
 * 3. Checks if the book (identified by `bookId`) is already in the user's love list.
 * 4. If not present, adds the book to the love list and updates the user data on the server.
 * 5. Displays a success message using `silverBox` if the book is successfully added.
 * 6. If the book is already in the love list, displays an informational message using `silverBox`.
 * 
 * @param {string} bookId - The unique identifier of the book to be added to the love list.
 * 
 * @returns {void} This function does not return any value. It performs actions and updates the server.
 * 
 * @throws {Error} Throws an error if there is a problem with fetching or updating user data.
 * 
 */


async function addToLoveList(bookId) {
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
    const loveList = user.loveList || [];

    if (!loveList.includes(bookId)) {
      loveList.push(bookId);

      await axios.put(`http://localhost:3000/user/${user.id}`, {
        ...user,
        loveList,
      });

      silverBox({
        title: {
          text: "ثبت شد",
          alertIcon: "success",
        },
        text: "کتاب مورد نظر شما به لیست علاقه مندی ها اضافه شد",
      });
    } else {
      silverBox({
        position: "top-right",
        alertIcon: "info",
        text: "شما قبلا این کتاب را به لیست علاقه مندی ها اضافه کردید.",
        centerContent: true,
        showCloseButton: true
 })
    }
  } catch (error) {
    console.error("Error adding to love list:", error);
  }
}

export default addToLoveList;
