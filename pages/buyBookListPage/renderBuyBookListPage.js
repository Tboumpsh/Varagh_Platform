import getBoughtList from "../../src/js/buyBooks/getBougthList";
import buyBookListPage from "./buyBookListPage";

function renderBuyBookListPage() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  main.append(buyBookListPage());
  getBoughtList();
}
export default renderBuyBookListPage;
