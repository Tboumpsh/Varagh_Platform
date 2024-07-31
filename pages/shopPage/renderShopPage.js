import shopPage from "./shopPage";

/**
 * Renders the shop page by inserting it into the main content area of the document.
 * 
 * This function performs the following steps:
 * 1. Retrieves the HTML element with the id `main` from the document.
 * 2. Clears the existing content of this element by setting its `innerHTML` to an empty string.
 * 3. Appends the generated shop page, which is produced by the `shopPage` function, to the `main` element.
 * 
 * The `shopPage` function is imported from another module and is responsible for creating the complete HTML structure of the shop page, including the header, search box, filter, products container, and footer.
 * 
 * @function renderShopPage
 * 
 * @returns {void}
 * 
 * @example
 * // Usage
 * renderShopPage();
 * 
 * @see {@link ./shopPage|shopPage}
 */

function renderShopPage() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  main.append(shopPage());
}
export default renderShopPage;
