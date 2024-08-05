import renderHistoryBuyListPage from "../../pages/historyBuyList/renderHistoryBuyList";
import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import renderBookLoveListPage from "../../pages/lovePage/renderLovePage";
import renderAboutPage from "../../pages/aboutUsPage/renderAboutPage";
import renderShopPage from "../../pages/shopPage/renderShopPage";
import renderPlanPage from "../../pages/planPage/renderPlanPage";

/**
 * Handles the click events for navigation links.
 *
 * This function determines which page to render based on the index of the clicked navigation link. 
 * It clears the main content area and then calls the appropriate render function based on the index.
 * 
 * @function handleLinkClick
 * @param {number} index - The index of the clicked navigation link. It determines which page to render:
 *   - `0` for the landing page
 *   - `1` for the about page
 *   - `2` for the shop page
 *   - `3` for the book love list page
 *   - `4` for the plan page
 * 
 * @returns {void}
 * handleLinkClick(2); // This will clear the main content and render the shop page
 */

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
    case 4:
      main.innerHTML = "";
      renderPlanPage();
      console.log("پلن کلیک شد");
      break;
    case 5:
      main.innerHTML = "";
      renderHistoryBuyListPage();
      console.log("history کلیک شد");
      break;
    default:
      console.log("خرید کلیک شد");
      break;
  }
}

export default handleLinkClick;
