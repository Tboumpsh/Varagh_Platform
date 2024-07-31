import renderLandingPage from "../../../pages/landingPage/renderLandingPage";

/**
 * Logs out the current user by removing their information from `localStorage` and then
 * redirects to the landing page.
 * 
 * This function performs the following actions:
 * 1. Removes the `"currentUser"` item from `localStorage`, effectively logging out the user.
 * 2. Calls `renderLandingPage()` to redirect the user to the landing page or refresh the landing page view.
 * 
 * This function does not take any parameters and does not return any value.
 * 
 * @function addLogoutListener
 * 
 * @returns {void} This function does not return any value. It performs side effects such as modifying `localStorage` and updating the webpage.
 * 
 */

function addLogoutListener() {
  localStorage.removeItem("currentUser");
  renderLandingPage();
}

export default addLogoutListener;
