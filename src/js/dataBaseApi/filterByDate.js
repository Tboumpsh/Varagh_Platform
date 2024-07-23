import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

async function filterByDate(order) {
  let productsContent = document.getElementById('productsContent')
  try {
    const sortOrder = order === 'newest' ? 'desc' : 'asc';
    const { data: books } = await axios.get(`http://localhost:3000/books?_sort=date&_order=${sortOrder}`);
    productsContent.innerHTML = ''; // Clear existing cards

    const cardElements = books.map(book => {
      return cardGenerator({
        titleContent: book.name,
        paragraphContent: book.description,
        size: "medium",
        statues: "primary",
        upImage: book.banner,
      });
    });

    cardElements.forEach(cardElement => {
      productsContent.appendChild(cardElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default filterByDate;
