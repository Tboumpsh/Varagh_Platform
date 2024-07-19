import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

async function fetchBooksNewest() {
  try {
    let { data: books } = await axios.get("http://localhost:3000/books?_limit=3&date_gte=1401");

    // Generate card elements
    const cardElements = books.map(book => {
      return cardGenerator({
        titleContent: book.name,
        paragraphContent: book.description,
        size: "medium",
        statues: "primary",
        upImage: book.banner,
      });
    });

    return cardElements; // Return the array of card elements
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array on error
  }
}

export default fetchBooksNewest;
