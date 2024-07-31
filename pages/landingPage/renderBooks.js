import fetchBooksAndProcess from "../../src/js/dataBaseApi/createBestSellerCard";
import fetchBooksCheapest from "../../src/js/dataBaseApi/createCheapestCard";
import fetchBooksNewest from "../../src/js/dataBaseApi/createNewestCard";

/**
 * Fetches and renders book cards for best sellers, cheapest books, and newest books.
 * 
 * This asynchronous function retrieves book data from three different APIs and appends
 * the corresponding book cards to the respective sections on the webpage.
 * 
 * - Fetches the best seller book cards and appends them to the element with the ID `cardBestSellerList`.
 * - Fetches the cheapest book cards and appends them to the element with the ID `cardCheapestList`.
 * - Fetches the newest book cards and appends them to the element with the ID `cardNewestList`.
 * 
 * Each fetch operation is awaited to ensure that the data is retrieved before appending the cards
 * to the page. The function does not take any parameters and does not return any value.
 * 
 * @async
 * @function renderBooks
 * 
 * @throws {Error} Throws an error if the fetching of book data fails.
 * 
 * @example
 * // Usage
 * renderBooks().then(() => {
 *   console.log('Books rendered successfully');
 * }).catch((error) => {
 *   console.error('Error rendering books:', error);
 * });
 */

async function renderBooks() {
  let cardBestSellerList = document.getElementById("cardBestSellerList");

  let cardBS = await fetchBooksAndProcess();

  cardBS.forEach((cardElement) => {
    cardBestSellerList.appendChild(cardElement);
  });


  let cardCheapestList = document.getElementById("cardCheapestList");
  let cardCh = await fetchBooksCheapest();
  cardCh.forEach((cardElement) => {
    cardCheapestList.appendChild(cardElement);
  });

  let cardNewestList = document.getElementById("cardNewestList");
  let cardN = await fetchBooksNewest();

  cardN.forEach((cardElement) => {
    cardNewestList.appendChild(cardElement);
  });
}
export default renderBooks;
