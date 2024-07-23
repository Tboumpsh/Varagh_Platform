import aboutPage from "./aboutPage";

function renderAboutPage() {
  let main = document.getElementById("main");
  main.append(aboutPage());
}
export default renderAboutPage;
