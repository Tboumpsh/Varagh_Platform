import showBookDetails from "../../src/js/booksDataList/bookDetaList";
import bookInformationPage from "./bookInformation";

/**
 * Renders the book information page with the specified book details.
 * This function:
 * 1. Clears the content of the `main` element.
 * 2. Appends the generated book information page to the `main` element.
 * 3. Clears the content of the `bookInfo` section within the book information page.
 * 4. Fetches and displays the details of the specified book using `showBookDetails`.
 *
 * @function renderBookInformationPage
 * @param {string} titleContent - The title of the book for which details are to be displayed.
 * @returns {void} - This function does not return a value.
 */
function renderBookInformationPage(titleContent) {
  let main = document.getElementById("main");
  main.innerHTML = "";

  main.append(bookInformationPage());
  // let bookInfo = document.getElementById("bookInfo");
  let bookInfo = document.getElementById("bookInfo");
  bookInfo.innerHTML = "";
  showBookDetails(titleContent)
}
export default renderBookInformationPage;
