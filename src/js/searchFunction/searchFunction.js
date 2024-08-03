import axios from "axios";

import displayBookDetails from "./returnBooks";

async function searchFunction() {
    let search = document.getElementById("search");
    const query = search.value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    if (query.length < 1) {
      resultsContainer.innerHTML = "";
      resultsContainer.style.display = "none";
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/books`);
      const books = response.data;

      resultsContainer.innerHTML = "";
      const filteredBooks = books.filter(book => 
        book.name.toLowerCase().startsWith(query) || 
        book.genre.toLowerCase().startsWith(query)
      );

      if (filteredBooks.length > 0) {
        filteredBooks.forEach((book) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${book.name} - ${book.genre}`;
          listItem.addEventListener("click", () => {
            displayBookDetails(book.id);
          });
          resultsContainer.appendChild(listItem);
        });
        resultsContainer.style.display = "block";
      } else {
        resultsContainer.style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      resultsContainer.style.display = "none";
    }
  }

  export default searchFunction