import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import renderBookLoveListPage from "../../pages/lovePage/renderLovePage";
import renderAboutPage from "../../pages/aboutUsPage/renderAboutPage";
import renderShopPage from "../../pages/shopPage/renderShopPage";

function handleLinkClick(index) {
  let main = document.getElementById("main");
  switch (index) {
    case 0:
      main.innerHTML = "";
      renderLandingPage();
      console.log("صفحه اصلی کلیک شد");
      break;
    case 1:
      main.innerHTML = "";
      renderAboutPage();
      console.log("درباره ما کلیک شد");
      break;
    case 2:
      main.innerHTML = "";
      renderShopPage();
      console.log("فروشگاه کلیک شد");
      break;
    case 3:
      main.innerHTML = "";
      renderBookLoveListPage();
      console.log("علاقه مندی ها کلیک شد");
      break;
    default:
      console.log("لینک کلیک شد");
      break;
  }
}

export default handleLinkClick;
