import fetchBooksAndProcess from "../../src/js/dataBaseApi/createBestSellerCard";
import fetchBooksCheapest from "../../src/js/dataBaseApi/createCheapestCard";
import fetchBooksNewest from "../../src/js/dataBaseApi/createNewestCard";

async function renderBooks() {
  let cardBestSellerList = document.getElementById("cardBestSellerList");

  let cardBS = await fetchBooksAndProcess();

  cardBS.forEach((cardElement) => {
    cardBestSellerList.appendChild(cardElement);
  });

  //! WARNING

  let cardCheapestList = document.getElementById("cardCheapestList");
  let cardCh = await fetchBooksCheapest();
  cardCh.forEach((cardElement) => {
    cardCheapestList.appendChild(cardElement);
  });
  //! WARNING
  let cardNewestList = document.getElementById("cardNewestList");
  let cardN = await fetchBooksNewest();

  cardN.forEach((cardElement) => {
    cardNewestList.appendChild(cardElement);
  });
}
export default renderBooks;
