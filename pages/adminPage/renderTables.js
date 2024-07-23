import fetchBooksAndRenderTable from "../../components/booksTableComponent/booksTableComponent";
import fetchUsersAndRenderTable from "../../components/UsertableComponent/tableComponent";

async function renderTables() {
  fetchUsersAndRenderTable();
  fetchBooksAndRenderTable();
}
export default renderTables;
