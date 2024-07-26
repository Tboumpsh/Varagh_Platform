import axios from 'axios';

import cardGenerator from '../../../components/cardComponent/cardComponent';

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