import calculateAndDisplayTotalPrice from "../../src/js/buyBooks/getTotalPrice";
import getBoughtList from "../../src/js/buyBooks/getBougthList";
import buyBookListPage from "./buyBookListPage";

/**
 * Renders the buy book list page and populates it with purchased book data.
 * This function:
 * 1. Clears the content of the `main` element.
 * 2. Appends the generated book list page to the `main` element.
 * 3. Fetches and displays the list of bought books using `getBoughtList`.
 *
 * @function renderBuyBookListPage
 * @returns {void} - This function does not return a value.
 */

function renderBuyBookListPage() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  main.append(buyBookListPage());
  getBoughtList();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    calculateAndDisplayTotalPrice(currentUser.name);
  }
}
export default renderBuyBookListPage;
