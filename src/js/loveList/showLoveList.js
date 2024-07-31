import axios from 'axios';

import cardGenerator from '../../../components/cardComponent/cardComponent';

/**
 * Retrieves the list of books that the current user has marked as loved.
 * 
 * This function performs the following actions:
 * 1. Retrieves the username of the currently logged-in user from `localStorage`.
 * 2. Fetches the user data from the server based on the retrieved username.
 * 3. Checks if the user exists and retrieves the list of loved books for that user.
 * 4. Fetches all books from the server.
 * 5. Filters the books to include only those that are in the user's love list.
 * 6. Displays the filtered list of loved books using the `displayLovedBooks` function.
 * 
 * @async
 * @function getLoveList
 * 
 * @returns {Promise<void>} This function does not return any value. It performs actions and updates the DOM.
 * 
 * @throws {Error} Throws an error if there is a problem with fetching user or book data.
 * 
 */


async function getLoveList() {
    const {name:userName} = JSON.parse(localStorage.getItem("currentUser"));

  if (!userName) {
    alert('No user logged in');
    return;
  }

  try {
    const { data: users } = await axios.get(`http://localhost:3000/user?name=${userName}`);
    if (users.length === 0) {
      alert('User not found');
      return;
    }

    const user = users[0];
    const loveList = user.loveList || [];

    const { data: books } = await axios.get('http://localhost:3000/books');
    const lovedBooks = books.filter(book => loveList.includes(book.id));

    displayLovedBooks(lovedBooks);
  } catch (error) {
    console.error('Error fetching love list:', error);
    alert('An error occurred while fetching the love list');
  }
}

function displayLovedBooks(books) {
  const loveListContainer = document.getElementById('loveListSection');
  loveListContainer.innerHTML = '';

  books.forEach(book => {
    const bookElement = cardGenerator({
      bookId: book.id,
      titleContent: book.name,
      paragraphContent: book.description,
      size: "medium",
      statues: "primary",
      upImage: book.banner,
    });
    loveListContainer.append(bookElement);
  });
}

export default getLoveList;