import renderLandingPage from "../../../pages/landingPage/renderLandingPage";

function addLogoutListener() {
  localStorage.removeItem("currentUser");
  renderLandingPage();
}

export default addLogoutListener;
