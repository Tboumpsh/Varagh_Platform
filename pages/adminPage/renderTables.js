import fetchBooksAndRenderTable from "../../components/booksTableComponent/booksTableComponent";
import fetchUsersAndRenderTable from "../../components/UsertableComponent/tableComponent";

/**
 * Asynchronously fetches and renders the user and book tables.
 * This function calls fetchUsersAndRenderTable and fetchBooksAndRenderTable to fetch data and render the respective tables.
 * It doesn't take any parameters and doesn't return any value.
 * Both functions are assumed to handle their own data fetching and rendering logic.
 * @async
 * @function renderTables
 */
async function renderTables() {
  fetchUsersAndRenderTable();
  fetchBooksAndRenderTable();
}
export default renderTables;
