import getLoveList from "../../src/js/loveList/showLoveList";
import booksLovePage from "./lovePage";

function renderBookLoveListPage() {
    let main = document.getElementById("main");
    main.innerHTML = "";
    main.append(booksLovePage());
    getLoveList();
  }
  export default renderBookLoveListPage;
  