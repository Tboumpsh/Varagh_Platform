import renderTables from "./renderTables";
import adminPage from "./adminPage";

/**
 * Renders the Admin Page and appends it to the main element.
 * Also, it fetches and renders the user and books tables by calling renderTables function.
 * Assumes that the main element exists in the DOM.
 */
function renderAdminPage() {
  let main = document.getElementById("main");
  main.append(adminPage());
  renderTables();
}
export default renderAdminPage;
