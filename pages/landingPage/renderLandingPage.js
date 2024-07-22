import landingPage from "./landingPage";
import renderBooks from "./renderBooks";

function renderLandingPage() {
  let main = document.getElementById("main");
  main.append(landingPage());
  renderBooks();
}
export default renderLandingPage;
