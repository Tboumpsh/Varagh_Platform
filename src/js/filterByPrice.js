import axios from "axios";

import cardGenerator from "../../components/cardComponent/cardComponent";

async function filterByPrice(order) {
  try {
    const { data: books } = await axios.get(
      `http://localhost:3000/books?_sort=price&_order=${order}`
    );
   
    cardContainer.innerHTML = ""; // Clear existing cards

    const cardElements = books.map((book) => {
      return cardGenerator({
        titleContent: book.name,
        paragraphContent: book.description,
        size: "medium",
        statues: "primary",
        upImage: book.banner,
      });
    });

    cardElements.forEach((cardElement) => {
      cardContainer.appendChild(cardElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default filterByPrice;
