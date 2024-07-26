import changeProfiles from "../../src/js/changeProfile/changeProfile";
import changeProfileUserSection from "./changeProfileUser";

function renderChangeProfilePage() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  main.append(changeProfileUserSection());
  changeProfiles();
}
export default renderChangeProfilePage;
