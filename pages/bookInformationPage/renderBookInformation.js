import showBookDetails from "../../src/js/booksDataList/bookDetaList";
import bookInformationPage from "./bookInformation";

function renderBookInformationPage(titleContent) {
  let main = document.getElementById("main");
  main.innerHTML = "";
  
  main.append(bookInformationPage());
  let bookInfo = document.getElementById('bookInfo')
  bookInfo.append(showBookDetails(titleContent))
}
export default renderBookInformationPage;
