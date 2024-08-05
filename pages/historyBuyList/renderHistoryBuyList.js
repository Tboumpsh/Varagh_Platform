import getHistoryList from "../../src/js/HistoryList/getHistoryList";
import historyBuyList from "./historyBuyList";

/**
 * Renders the "Book Love List" page by performing the following tasks:
 * 1. Clears the content of the main container element.
 * 2. Appends the "Books Love Page" component to the main container.
 * 3. Fetches and displays the list of favorite books.
 * 
 * The function works as follows:
 * - Retrieves the `main` element from the DOM by its ID ("main").
 * - Clears any existing content within the `main` element by setting `innerHTML` to an empty string.
 * - Appends the result of `booksLovePage()` to the `main` element. This function generates and returns the complete "Books Love" page layout.
 * - Calls `getLoveList()` to fetch and display the list of books marked as favorites. This function populates the section designated for the love list with the appropriate data.
 * 
 * This function does not take any parameters and does not return a value. It directly manipulates the DOM to render the page.
 * 
 * @function renderBookLoveListPage
 * 
 * @returns {void} This function does not return a value.
 * 
 * @example
 * // Usage
 * renderBookLoveListPage();
 * 
 * @see {@link ../../src/js/loveList/showLoveList|getLoveList} for details about the function that fetches and displays the list of favorite books.
 * @see {@link ./lovePage|historyBuyList} for details about the function that generates the "Books Love" page layout.
 */

function renderHistoryBuyListPage() {
    let main = document.getElementById("main");
    main.innerHTML = "";
    main.append(historyBuyList());
    getHistoryList();
  }
  export default renderHistoryBuyListPage;
  