import landingPage from "./landingPage";
import renderBooks from "./renderBooks";

/**
 * Renders the landing page by clearing the main content area,
 * appending the landing page content, and then rendering
 * the book sections including best sellers, cheapest, and newest books.
 * 
 * This function performs the following tasks:
 * 1. Clears the existing content of the main element by setting its `innerHTML` to an empty string.
 * 2. Appends the generated landing page content to the main element.
 * 3. Calls `renderBooks()` to fetch and render book cards for best sellers, cheapest books, and newest books.
 * 
 * The `landingPage()` function is expected to return a DOM element that represents the entire landing page.
 * The `renderBooks()` function is expected to fetch and append book cards to specific sections within the landing page.
 * 
 * This function does not take any parameters and does not return any value.
 * 
 * @function renderLandingPage
 * 
 * @example
 * // Usage
 * renderLandingPage();
 * 
 * @see {@link ./landingPage} for details about the landing page structure.
 * @see {@link ./renderBooks} for details about fetching and rendering book cards.
 */

function renderLandingPage() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  main.append(landingPage());
  renderBooks();
}
export default renderLandingPage;
