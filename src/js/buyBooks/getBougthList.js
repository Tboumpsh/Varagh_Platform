import axios from 'axios';

import cardGenerator from '../../../components/cardComponent/cardComponent';

/**
 * Fetches and displays the list of books bought by the current user.
 * 
 * This asynchronous function performs the following actions:
 * 1. Retrieves the current user's name from local storage.
 * 2. Checks if a user is logged in and retrieves user details from the server.
 * 3. Fetches the list of all books from the server.
 * 4. Filters the books to include only those that are in the user's bought list.
 * 5. Calls `displayBoughtBooks` to display the bought books on the page.
 * 6. Handles errors by logging them to the console and alerting the user.
 * 
 * @async
 * @function getBoughtList
 * @returns {Promise<void>} A promise that resolves when the bought list has been fetched and displayed, 
 *     or rejects if an error occurs during the fetching process.
 * 
 * @throws {Error} Throws an error if there is an issue with fetching user data or book data from the server,
 *     or if the current user cannot be identified.
 * 
 */

async function getBoughtList() {
    const { name: userName } = JSON.parse(localStorage.getItem("currentUser"));

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
        const boughtList = user.boughtList || [];

        const { data: books } = await axios.get('http://localhost:3000/books');
        const boughtBooks = books.filter(book => boughtList.includes(book.id));

        displayBoughtBooks(boughtBooks);
    } catch (error) {
        console.error('Error fetching bought list:', error);
        alert('An error occurred while fetching the bought list');
    }
}

function displayBoughtBooks(books) {
    const boughtListContainer = document.getElementById('buyList');
    boughtListContainer.innerHTML = '';

    books.forEach(book => {
        const bookElement = cardGenerator({
            bookId: book.id,
            titleContent: book.name,
            paragraphContent: book.description,
            size: "medium",
            statues: "primary",
            upImage: book.banner,
        });
        boughtListContainer.append(bookElement);
    });

    
}

export default getBoughtList;
