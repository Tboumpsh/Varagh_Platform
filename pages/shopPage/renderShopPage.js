import shopPage from "./shopPage";

function renderShopPage() {
  let main = document.getElementById("main");
  main.append(shopPage());
}
export default renderShopPage;
