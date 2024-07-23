import renderTables from "./renderTables";
import adminPage from "./adminPage";

function renderAdminPage() {
  let main = document.getElementById("main");
  main.append(adminPage());
  renderTables();
}
export default renderAdminPage;
