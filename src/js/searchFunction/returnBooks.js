import axios from "axios";

import cardGenerator from "../../../components/cardComponent/cardComponent";

async function displayBookDetails(bookId) {
  try {
    const bookResponse = await axios.get(
      `http://localhost:3000/books/${bookId}`
    );
    const book = bookResponse.data;

    const cardElement = cardGenerator({
      bookId: book.id,
      titleContent: book.name,
      paragraphContent: book.description,
      size: "medium",
      statues: "primary",
      upImage: book.banner,
    });

    const productsContent = document.getElementById("productsContent");
    productsContent.innerHTML = ""; // Clear existing cards
    productsContent.appendChild(cardElement);
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
}

document.addEventListener("click", function (event) {
  const searchContainer = document.getElementById("searchSection");
  if (!searchContainer.contains(event.target)) {
    document.getElementById("results").style.display = "none";
  }
});
export default displayBookDetails;
